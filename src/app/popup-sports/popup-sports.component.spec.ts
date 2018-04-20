import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSportsComponent } from './popup-sports.component';

describe('PopupSportsComponent', () => {
  let component: PopupSportsComponent;
  let fixture: ComponentFixture<PopupSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
