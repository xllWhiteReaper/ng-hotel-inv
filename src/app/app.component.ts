import { PropertyRead } from '@angular/compiler';
import { Component, ViewChild, ViewContainerRef,
  AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { HinvComponent } from './hinv/hinv.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelInventoryApp';
  
  userType: string = "Admin";

  
  @ViewChild ('any', {static: true}) anyDiv!: ElementRef;
  ngOnInit(){

  }

  addDiv(){
    let num = Math.round(Math.random());
    this.anyDiv.nativeElement.innerHTML = "New Content";
    num == 1 ? this.anyDiv.nativeElement.setAttribute('class', 'even'): this.anyDiv.nativeElement.setAttribute('class', 'odd');
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(){
  //   const componentRef = this.vcr.createComponent(HinvComponent);
  //   // To modify any Property, you 
  //   // can use the following code
  //   componentRef.instance.numberOfRooms = 250;
  // }
  
}
