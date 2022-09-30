import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutraComponent } from './sutra.component';

describe('SutraComponent', () => {
  let component: SutraComponent;
  let fixture: ComponentFixture<SutraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SutraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
