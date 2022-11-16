import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HinvComponent } from './hinv.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';

const routes: Routes = [
  { path: 'rooms/add', component: RoomsAddComponent },
  {
    // This is empty becuase it will be 
    // lazy loaded and therefore includes the path already
    path: '',
    component: HinvComponent,
    children: [{ path: ':roomid', component: RoomsBookingComponent }],
    // This works with a router-oulet and children routing 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
