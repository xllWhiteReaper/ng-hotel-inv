import { HttpClient, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { RoomList } from '../room';
import { Photo } from './photos';




@Injectable({
  providedIn: 'root'
})
export class RoomsServiceService {
  private photosURL = `https://jsonplaceholder.typicode.com/photos`;
  private roomsList: RoomList[] = [
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
  // This is a way of getting specific
  // Pieces of data and actually
  // manipulating them to our convenience
  // Without subscribing to an observable
  getPhotos$ = this.http.get<Photo[]>(this.photosURL).pipe(
    shareReplay(1)
  );
  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig,
    private http: HttpClient) {
    console.log("Creation of Rooms List");
    console.log(appConfig.apiEndpoint);
  }
  getRoomsList() {
    return this.roomsList;
  }
  getPhotos() {
    const request = new HttpRequest(`GET`, this.photosURL, {
      reportProgress: true
    });
    return this.http.request(request);
  }

  addRoom(){
    
  }
}
