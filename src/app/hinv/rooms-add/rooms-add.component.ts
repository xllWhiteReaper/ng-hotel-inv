import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent implements OnInit {
  successMessage!: string | undefined;
  room: RoomList = {
    roomNumber: 0,
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}
  addRoom(roomsForm: NgForm) {
    this.successMessage = 'Room added successfully!';
    roomsForm.resetForm({
      // This will be treated 
      // as default data once 
      // we reset the form
      roomNumber: 0,
      roomType: '',
      amenities: '',
      price: 0,
      photos: '',
      checkInTime: new Date(),
      checkOutTime: new Date(),
    });
    setTimeout(() => {
      this.successMessage = undefined;
    }, 3500);
  }
}
