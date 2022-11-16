import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css'],
})
export class RoomsBookingComponent implements OnInit {
  id!: number;
  // id$: Observable<number> = this.router.params.pipe(
  //   map((params) => params['roomid'])
  // );
  // This ways is alright but lacks when there 
  // are multiple inputs at the Router, that is the 
  // reason why we should use: 
  id$ = this.router.paramMap.pipe(
    map((params) => params.get('roomid'))
  );
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomid'];
    // });
    // SUbscribing could induce memory leakeage
    // SO it is not recommended
    // this.id = this.router.snapshot.params['roomid'];
    // THis will never accept another __values, it is static
  }
  changeId() {
    this.id++;
  }
}
