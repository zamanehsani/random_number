import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({
  /** if you need to use cors */
  cors:{
    origin: "*"
  }
})

export class MyGateway implements OnModuleInit{
  
  @WebSocketServer()
  server:Server;

  onModuleInit() {
    this.server.on('connection', (socket)=>{
      console.log("connected.", socket.id);
    })
  }


  // let the users listen to event of chat
  @SubscribeMessage('chat')
  onChat(@MessageBody() body:any){
    console.log("chat: ",body)

    // send the user messages back to the chat event
    this.server.emit('chat', {
      body
    })
  }

  // make the ranking event
  @SubscribeMessage('ranking')
  onRanking(@MessageBody() body:any){
    console.log("ranking",body )

    // send the user messages back
    this.server.emit('ranking', {
      body
    })
  }

  // make the current poll event
  @SubscribeMessage('poll')
  onPoll(@MessageBody() body:any){
    console.log("poll ",body )

    // send the user messages back
    this.server.emit('poll', {body})
  }

  
}