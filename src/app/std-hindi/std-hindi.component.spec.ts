import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHindiComponent } from './std-hindi.component';

describe('StdHindiComponent', () => {
  let component: StdHindiComponent;
  let fixture: ComponentFixture<StdHindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdHindiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdHindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
