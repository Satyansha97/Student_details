import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdScienceComponent } from './std-science.component';

describe('StdScienceComponent', () => {
  let component: StdScienceComponent;
  let fixture: ComponentFixture<StdScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
