import { Component } from '@angular/core';
import { Room } from '../room';
import { ROOMS } from '../mock-rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms = ROOMS;

  constructor() { }
}
