import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdMathsComponent } from './std-maths.component';

describe('StdMathsComponent', () => {
  let component: StdMathsComponent;
  let fixture: ComponentFixture<StdMathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdMathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdMathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
