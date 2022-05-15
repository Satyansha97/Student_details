import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdComputerComponent } from './std-computer.component';

describe('StdComputerComponent', () => {
  let component: StdComputerComponent;
  let fixture: ComponentFixture<StdComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdComputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
