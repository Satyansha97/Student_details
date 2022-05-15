import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdEnglishComponent } from './std-english.component';

describe('StdEnglishComponent', () => {
  let component: StdEnglishComponent;
  let fixture: ComponentFixture<StdEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
