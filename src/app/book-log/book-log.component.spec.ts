import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLogComponent } from './book-log.component';

describe('BookLogComponent', () => {
  let component: BookLogComponent;
  let fixture: ComponentFixture<BookLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
