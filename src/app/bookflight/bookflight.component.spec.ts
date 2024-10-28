import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFlightComponent } from './bookflight.component';

describe('BookflightComponent', () => {
  let component: BookFlightComponent;
  let fixture: ComponentFixture<BookFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookFlightComponent]
    });
    fixture = TestBed.createComponent(BookFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
