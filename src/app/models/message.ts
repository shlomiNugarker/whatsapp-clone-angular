import { Reaction } from './reaction';
import { Reply } from './reply';

export interface Message {
  id: string;
  userId: string;
  text: string;
  createdBy: string;
  reactions: Reaction[];
  createdAt: number;
  replies: Reply[];
}
