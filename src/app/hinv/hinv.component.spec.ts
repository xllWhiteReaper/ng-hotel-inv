import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinvComponent } from './hinv.component';

describe('HinvComponent', () => {
  let component: HinvComponent;
  let fixture: ComponentFixture<HinvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
