import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMeetupsComponent } from './my-meetups.component';

describe('MyMeetupsComponent', () => {
  let component: MyMeetupsComponent;
  let fixture: ComponentFixture<MyMeetupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMeetupsComponent]
    });
    fixture = TestBed.createComponent(MyMeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
