import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  messages: number[] = [
    1, 3, 11, 13, 14, 15, 1, 4, 5, 6, 7, 7, 88, 8, 6, 66, 6, 17, 18,
  ];
}
