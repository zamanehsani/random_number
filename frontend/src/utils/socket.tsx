// src/services/socketService.ts
import { io, Socket } from 'socket.io-client';
import { ChatEvent, PollEvent, RankEvent } from '../utils/types';

class SocketService {
  private socket: Socket | null = null;

  public connect(serverUrl: string): void {
    this.socket = io(serverUrl, {
      transports: ['websocket'],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });

    this.socket.on('connect', () => {
      console.log('Successfully connected to the server');
    });

    this.socket.on('connect_error', (error) => {
      console.error('Connection Error:', error);
    });

    this.socket.on('reconnect_attempt', () => {
      console.log('Attempting to reconnect...');
    });

    this.socket.on('reconnect_failed', () => {
      console.error('Reconnection failed');
    });
  }

  public on(event: 'chat', callback: (data: ChatEvent) => void): void;
  public on(event: 'poll', callback: (data: PollEvent) => void): void;
  public on(event: 'rank', callback: (data: RankEvent) => void): void;
  public on(event: string, callback: (data: any) => void): void {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  public off(event: string, callback: (data: any) => void): void {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }

  public emit(event: 'chat', data: ChatEvent): void {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

const socketService = new SocketService();
export default socketService;
