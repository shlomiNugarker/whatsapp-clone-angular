import { Reaction } from './reaction';

export interface Reply {
  id: string;
  userId: string;
  text: string;
  createdBy: string;
  reactions: Reaction[];
  createdAt: number;
}
