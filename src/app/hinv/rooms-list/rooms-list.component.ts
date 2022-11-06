import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { RoomList } from '../room';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {

  // For getting Data from the parent
  @Input() rooms:Array<RoomList>=[];


  // For sending data or an action to the parent data
  @Output() selectedRoom = new EventEmitter<RoomList>();
  

  constructor() { }

  ngOnInit(): void {
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }

}
