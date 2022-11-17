import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsGuard } from './guards/rooms.guard';
import { HinvComponent } from './hinv.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';

const routes: Routes = [
  { path: 'add', component: RoomsAddComponent, canActivate: [RoomsGuard] },
  {
    // This is empty because it will be
    // lazy loaded and therefore includes the path already
    path: '',
    component: HinvComponent,
    children: [{ path: ':roomid', component: RoomsBookingComponent }],
    // This works with a router-outlet and children routing
    canActivateChild: [RoomsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
