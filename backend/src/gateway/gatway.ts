import { OnModuleInit } from "@nestjs/common";
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { v4 as uuidv4 } from 'uuid';

interface Member {
  name: string;
  points: number;
  multiplier: number;
}

interface NGE {
  id: string;
  members: Member[];
}

@WebSocketGateway()
export class MyGateway implements OnModuleInit {
  
  @WebSocketServer()
  server: Server;

  private pollParticipants: Set<string> = new Set(); // To keep track of poll participants
  private NGEs: NGE[] = []; // To keep track of NGEs
  
  onModuleInit() {
    this.server.on('connection', (socket: Socket) => {
      console.log("Connected:", socket.id);
     
      // Handle disconnection
      socket.on('disconnect', () => {
        this.pollParticipants.delete(socket.id);
        this.removeFromNGE(socket.id);
      });
    });
  }

  private removeFromNGE(socketId: string) {
    for (const nge of this.NGEs) {
      nge.members = nge.members.filter(member => member.name !== socketId);
      console.log(`${socketId} has left the ${nge.id}`)
      if (nge.members.length === 0) {
        this.NGEs = this.NGEs.filter(n => n.id !== nge.id);
        console.log(`${nge.id} was desolved due to zero members...`)
      }
    }
  }

  @SubscribeMessage('chat')
  handleChat(@MessageBody() body: any) {
    console.log("Chat:", body);
    this.server.emit('chat', { body });
  }

  @SubscribeMessage('ranking')
  handleRanking(@MessageBody() body: any) {
    console.log("Ranking:", body);
    this.server.emit('ranking', { body });
  }

  @SubscribeMessage('poll')
  handlePoll(@MessageBody() body: any, @ConnectedSocket() client: Socket){
    // Add participant to the poll
    this.pollParticipants.add(body.name); // Assuming user_name is a unique identifier
    const ngeId = this.addToNGE(body.name, body.points, body.multiplier);

    // console.log("soc: ", this.server.sockets.sockets)
    client.emit('poll_participation', { ngeId });

    // send the user messages back
    this.server.emit('poll', {body})
  }

  private addToNGE(name: string, points: number, multiplier: number): string {
    let assigned = false;
    let assignedNGEId = '';

    // Try to assign the user to an existing NGE with less than 10 members
    for (const nge of this.NGEs) {
      if (nge.members.length < 10) {
        nge.members.push({ name: name, points, multiplier });
        assigned = true;
        assignedNGEId = nge.id;

        // Check if NGE is now active (5 to 10 members)
        if (nge.members.length >= 4 && nge.members.length <= 10) {
          this.activateNGE(nge);
        }

        break;
      }
    }

    // If not assigned to an existing NGE, create a new one
    if (!assigned) {
      const newNGE: NGE = {
        id: uuidv4(),
        members: [{ name: name, points, multiplier }],
      };
      this.NGEs.push(newNGE);
      assignedNGEId = newNGE.id;
    }

    return assignedNGEId;
  }

  private activateNGE(nge: NGE) {
    console.log(` NGE of ${nge.id} is active now...\n`);
    // Generate a random number between 1 and the maximum multiplier * 10.0
    const maxMultiplier = Math.max(...nge.members.map(member => member.multiplier));
    const randomNumber = (Math.random() * 10 * maxMultiplier).toFixed(1);

    // Broadcast the random number to all NGE members
    this.server.emit(nge.id, { ngeId: nge.id, randomNumber });
     
  }
}
