import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  messages: number[] = [1, 3, 11, 13, 14, 15, 16, 17, 18];
}
