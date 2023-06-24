import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupBoardComponent } from './meetup-board.component';

describe('MeetupBoardComponent', () => {
  let component: MeetupBoardComponent;
  let fixture: ComponentFixture<MeetupBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetupBoardComponent]
    });
    fixture = TestBed.createComponent(MeetupBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
