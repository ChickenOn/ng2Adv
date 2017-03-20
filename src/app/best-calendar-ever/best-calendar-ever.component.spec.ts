import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCalendarEverComponent } from './best-calendar-ever.component';

describe('BestCalendarEverComponent', () => {
  let component: BestCalendarEverComponent;
  let fixture: ComponentFixture<BestCalendarEverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCalendarEverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCalendarEverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
