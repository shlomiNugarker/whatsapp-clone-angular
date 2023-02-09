import { Message } from './message';
import { Reaction } from './reaction';
import { Reply } from './reply';

export interface Chat {
  id: number;
  userId: number;
  userId2: number;
  createdAt: number;
  reactions: Reaction[];
  replies: Reply[];
  messages: Message[];
}
