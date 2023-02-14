import { Injectable } from '@angular/core';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import io, { Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor() {}

  socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;
  baseUrl: string = '//localhost:3030';

  createSocketService = () => {
    const socketService = {
      setup: async () => {
        this.socket = io(this.baseUrl);
      },
      on: (eventName: string, cb: any) => {
        this.socket && this.socket.on(eventName, cb);
      },
      off: (eventName: string, cb = null) => {
        if (!this.socket) return;
        if (!cb) this.socket.removeAllListeners(eventName);
        else this.socket.off(eventName, cb);
      },
      emit: (eventName: string, data: any) => {
        this.socket && this.socket.emit(eventName, data);
      },
      terminate: () => {
        this.socket = null;
      },
    };
    return socketService;
  };

  actions = this.createSocketService();
}
