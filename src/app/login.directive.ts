import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  InjectionToken,
  OnInit,
  Inject,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appLogin]',
})
export class LoginDirective implements OnInit {
  div: any;
  @Input() appLogin: string = 'red';
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) // @Inject(DOCUMENT) private document: Document
  {}

  ngOnInit(): void {
    console.log(this.element);
    // this.element.nativeElement.style.backgroundColor = 'blue';
    // this.element.nativeElement.style.color = '#fff';
    // this.div = this.document.querySelector('.newClass');

    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      this.appLogin
    );
    this.div = document.querySelector('.newClass');
    console.log('this.div');
    console.log(this.div);
    this.div.firstChild.style.backgroundColor = 'aqua';
  }


  // The following works with actions 
  // to be performed once something has 
  // happened
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      this.appLogin
    );
    if(this.appLogin === "steelblue"){
      this.renderer.setStyle(
        this.element.nativeElement,
        "color",
        "white"
      );
    }
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "white"
    );
    if(this.appLogin === "steelblue"){
      this.renderer.setStyle(
        this.element.nativeElement,
        "color",
        "black"
      );
    }
  }
}
