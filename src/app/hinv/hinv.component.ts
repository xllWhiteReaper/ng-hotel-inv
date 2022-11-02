import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'app-hinv',
  templateUrl: './hinv.component.html',
  styleUrls: ['./hinv.component.scss']
})
export class HinvComponent implements OnInit {

  // Variables
  hotelName: string = "Sheraton";
  numberOfRooms: number = 150;
  hideRooms: boolean = false; 
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 15,
    totalRooms: 30
  }
  roomsList: RoomList [] = [
    {
      roomNumber: 1,
      roomType: "Deluxe Type",
      amenities: "AC, TV Cable, Jacuzzi",
      price: 1500,
      photos: '-',
      checkInTime: new Date('30-Oct-2022'),
      checkOutTime: new Date('01-Nov-2022')
    },
    {
      roomNumber: 2,
      roomType: "Deluxe Type",
      amenities: "AC, TV Cable, Jacuzzi",
      price: 1500,
      photos: '-',
      checkInTime: new Date('31-Oct-2022'),
      checkOutTime: new Date('02-Nov-2022')
    },
    {
      roomNumber: 3,
      roomType: "Presidential Suit",
      amenities: "AC, TV Cable, Jacuzzi, Private Pool, Room breakfast",
      price: 15000,
      photos: '-',
      checkInTime: new Date('30-Oct-2022'),
      checkOutTime: new Date('04-Nov-2022')
    },
    {
      roomNumber: 4,
      roomType: "Deluxe Type",
      amenities: "AC, TV Cable, Jacuzzi",
      price: 1500,
      photos: '-',
      checkInTime: new Date('05-Nov-2022'),
      checkOutTime: new Date('01-Nov-2022')
    },
    {
      roomNumber: 5,
      roomType: "Standart Type",
      amenities: "AC",
      price: 500,
      photos: '-',
      checkInTime: new Date('30-Oct-2022'),
      checkOutTime: new Date('01-Nov-2022')
    },
    {
      roomNumber: 6,
      roomType: "Standart Type",
      amenities: "AC, TV Cable",
      price: 700,
      photos: '-',
      checkInTime: new Date('30-Oct-2022'),
      checkOutTime: new Date('01-Nov-2022')
    },
    {
      roomNumber: 7,
      roomType: "Deluxe Type",
      amenities: "AC, TV Cable, Jacuzzi",
      price: 1500,
      photos: '-',
      checkInTime: new Date('07-Nov-2022'),
      checkOutTime: new Date('09-Nov-2022')
    }
  ];


  // Constructor
  constructor() { }

  ngOnInit(): void {
  }

  /* Functions*/
  toggle(): void{
    this.hideRooms = !this.hideRooms;
  }
}
