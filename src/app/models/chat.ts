import { Message } from './message';
import { Reaction } from './reaction';

export interface Chat {
  id: number;
  userId: number;
  userId2: number;
  createdAt: number;
  reactions: Reaction[];
  messages: Message[];
}
