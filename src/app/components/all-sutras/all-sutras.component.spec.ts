import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSutrasComponent } from './all-sutras.component';

describe('AllSutrasComponent', () => {
  let component: AllSutrasComponent;
  let fixture: ComponentFixture<AllSutrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSutrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSutrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
