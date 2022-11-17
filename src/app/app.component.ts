import { PropertyRead } from '@angular/compiler';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  OnInit,
  ElementRef,
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { HinvComponent } from './hinv/hinv.component';
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // if you want to use some data retreival
  // without subscribin, you can use snapshot
  // instead of subscribeOn, however any changes
  // in the data inside the same view will not
  // be updated
  initialConfig: any;
  title = 'hotelInventoryApp';

  userType: string = 'Admin';
  constructor(private initService: InitService, private router: Router) {
    this.router.events.subscribe(event=>{
      console.log(event);
    });
    console.log('App CONSTRUCTOR');
  }

  @ViewChild('any', { static: true }) anyDiv!: ElementRef;
  ngOnInit() {
    this.initialConfig = this.initService.getConfig();
    console.log(this.initialConfig);
  }

  addDiv() {
    let num = Math.round(Math.random());
    this.anyDiv.nativeElement.innerHTML = 'New Content';
    num == 1
      ? this.anyDiv.nativeElement.setAttribute('class', 'even')
      : this.anyDiv.nativeElement.setAttribute('class', 'odd');
  }

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit() {
    // const componentRef = this.vcr.createComponent(HinvComponent);
    // // To modify any Property, you
    // // can use the following code
    // componentRef.instance.numberOfRooms = 250;
    console.log('ngAfterViewInit');
    console.log('this.initialConfig');
    console.log(this.initialConfig);
  }
}
