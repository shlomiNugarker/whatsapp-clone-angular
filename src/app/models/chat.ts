import { Message } from './message';

export interface Chat {
  id: string;
  userId: [string, string];
  messages: Message[];
}
