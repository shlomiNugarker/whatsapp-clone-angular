import { Reaction } from './reaction';

export interface Message {
  id: string;
  text: string;
  createdBy: string;
  reactions: Reaction[];
  createdAt: number;
}
