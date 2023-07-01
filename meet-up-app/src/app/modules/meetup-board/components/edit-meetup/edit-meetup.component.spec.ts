import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeetupComponent } from './edit-meetup.component';

describe('EditMeetupComponent', () => {
  let component: EditMeetupComponent;
  let fixture: ComponentFixture<EditMeetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMeetupComponent]
    });
    fixture = TestBed.createComponent(EditMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
