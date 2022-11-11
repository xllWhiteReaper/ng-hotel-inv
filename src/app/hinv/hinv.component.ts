import { HttpEventType } from '@angular/common/http';
import { CssSelector } from '@angular/compiler';
import {
  Component, OnChanges, OnInit, SimpleChanges,
  ViewChild, AfterViewInit, ViewChildren,
  QueryList
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './room';
import { RoomsServiceService } from './services/rooms-service.service';

@Component({
  selector: 'app-hinv',
  templateUrl: './hinv.component.html',
  styleUrls: ['./hinv.component.scss']
})
export class HinvComponent implements OnInit, OnChanges, AfterViewInit {
  totalBytes = 0;
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
  numberOfPhotos!: Observable<number>;


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
    this.numberOfPhotos = this.roomsServices.getPhotos$.pipe(
      map(data=>data.length)
    );
    this.roomsList = this.roomsServices.getRoomsList();
    this.roomsServices.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log("The request has been made");
          break;

        case HttpEventType.ResponseHeader:
          console.log("Request success");
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded;
          break;
        case HttpEventType.Response:
          console.log("The request is complete");
          console.log(event.body);
          break;
      }
    });
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
