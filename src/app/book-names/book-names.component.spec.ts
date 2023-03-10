import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNamesComponent } from './book-names.component';

describe('BookNamesComponent', () => {
  let component: BookNamesComponent;
  let fixture: ComponentFixture<BookNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
