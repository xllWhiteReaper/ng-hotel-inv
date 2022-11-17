import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent,
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    // this is for lazyloading
    path: 'rooms',
    loadChildren: () =>
      import('./hinv/rooms.module').then((m) => m.RoomsModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
    canActivate: [LoginGuard],
  },
  { path: '**', component: NotFoundComponent },
  // The path ** represent any other route that hasn't
  // been specified previously
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // Just Configure forRoot only once
  exports: [RouterModule],
})
export class AppRoutingModule {}
