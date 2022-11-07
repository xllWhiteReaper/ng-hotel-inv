import { CssSelector } from '@angular/compiler';
import {
  Component, OnChanges, OnInit, SimpleChanges,
  ViewChild, AfterViewInit, ViewChildren,
  QueryList
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './room';
import { RoomsServiceService } from './services/rooms-service.service';

@Component({
  selector: 'app-hinv',
  templateUrl: './hinv.component.html',
  styleUrls: ['./hinv.component.scss']
})
export class HinvComponent implements OnInit, OnChanges, AfterViewInit {

  // Variables
  counter: number = 0;
  hotelName: string = "Sheraton";
  numberOfRooms: number = 150;
  hideRooms: boolean = false;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 15,
    totalRooms: 30
  }
  roomsList: RoomList[] = [];
  selectedRoom!: RoomList;


  // There is a second parameter here 
  // However, it is not that used or 
  // by default is false. It is {static:true}
  // Which indicates that you re sure 
  // the component is ready to be displayed
  // This isn't true if you've got some 
  // Asynchronous code inside the child 
  // element
  // @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;


  @ViewChildren(HeaderComponent) headerChildrenArray!: QueryList<HeaderComponent>;

  // Constructor
  constructor(private roomsServices: RoomsServiceService) {
  }

  ngOnInit(): void {
    // this.roomsList = [
    //   {
    //     roomNumber: 1,
    //     roomType: "Deluxe Type",
    //     amenities: "AC, TV Cable, Jacuzzi",
    //     price: 1500,
    //     photos: '-',
    //     checkInTime: new Date('30-Oct-2022'),
    //     checkOutTime: new Date('01-Nov-2022')
    //   },
    //   {
    //     roomNumber: 2,
    //     roomType: "Deluxe Type",
    //     amenities: "AC, TV Cable, Jacuzzi",
    //     price: 1500,
    //     photos: '-',
    //     checkInTime: new Date('31-Oct-2022'),
    //     checkOutTime: new Date('02-Nov-2022')
    //   },
    //   {
    //     roomNumber: 3,
    //     roomType: "Presidential Suit",
    //     amenities: "AC, TV Cable, Jacuzzi, Private Pool, Room breakfast",
    //     price: 15000,
    //     photos: '-',
    //     checkInTime: new Date('30-Oct-2022'),
    //     checkOutTime: new Date('04-Nov-2022')
    //   },
    //   {
    //     roomNumber: 4,
    //     roomType: "Deluxe Type",
    //     amenities: "AC, TV Cable, Jacuzzi",
    //     price: 1500,
    //     photos: '-',
    //     checkInTime: new Date('05-Nov-2022'),
    //     checkOutTime: new Date('01-Nov-2022')
    //   },
    //   {
    //     roomNumber: 5,
    //     roomType: "Standart Type",
    //     amenities: "AC",
    //     price: 500,
    //     photos: '-',
    //     checkInTime: new Date('30-Oct-2022'),
    //     checkOutTime: new Date('01-Nov-2022')
    //   },
    //   {
    //     roomNumber: 6,
    //     roomType: "Standart Type",
    //     amenities: "AC, TV Cable",
    //     price: 700,
    //     photos: '-',
    //     checkInTime: new Date('30-Oct-2022'),
    //     checkOutTime: new Date('01-Nov-2022')
    //   },
    //   {
    //     roomNumber: 7,
    //     roomType: "Deluxe Type",
    //     amenities: "AC, TV Cable, Jacuzzi",
    //     price: 1500,
    //     photos: '-',
    //     checkInTime: new Date('07-Nov-2022'),
    //     checkOutTime: new Date('09-Nov-2022')
    //   }
    // ];
    this.roomsList = this.roomsServices.getRoomsList();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngAfterViewInit(): void {
    // console.log("Data retrieval");
    // console.log(this.headerComponent);
    // this.headerComponent.title = "Hey yah, I've modified this from the parent component";
    this.headerChildrenArray.forEach(
      headerChildren => {
        // console.log(headerChildren);
        headerChildren.title = `, Title ${this.counter + 1}`;
        this.counter++;
      }
    );

    // let myArray:Array<any> = this.headerChildrenArray.toArray();
    // console.log("My array: ");
    // console.log(myArray);



  }

  /* Functions*/
  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }
  addNewRoom() {
    console.log("OK");
    const newRoom: RoomList = {
      roomNumber: 8,
      roomType: "Deluxe Type",
      amenities: "AC, TV Cable, Jacuzzi",
      price: 2300,
      photos: '-',
      checkInTime: new Date('14-Nov-2022'),
      checkOutTime: new Date('19-Nov-2022')
    };
    // this.roomsList.push(newRoom);
    this.roomsList = [...this.roomsList, newRoom];
    // IMMUTABILITY

  }

}
