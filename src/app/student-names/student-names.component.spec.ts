import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNamesComponent } from './student-names.component';

describe('StudentNamesComponent', () => {
  let component: StudentNamesComponent;
  let fixture: ComponentFixture<StudentNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
