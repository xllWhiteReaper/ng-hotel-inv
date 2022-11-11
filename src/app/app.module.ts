import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HinvComponent } from './hinv/hinv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsListComponent } from './hinv/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { InitService } from './init.service';

const initFactory = (initService: InitService) => {
  return () => initService.init();
  // This is for getting data before 
  // the rest of components is created
};

@NgModule({
  declarations: [
    AppComponent,
    HinvComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [BrowserModule, NgbModule, HttpClientModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
