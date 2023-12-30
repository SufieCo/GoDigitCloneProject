import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsVarientComponent } from './cars-varient.component';

describe('CarsVarientComponent', () => {
  let component: CarsVarientComponent;
  let fixture: ComponentFixture<CarsVarientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsVarientComponent]
    });
    fixture = TestBed.createComponent(CarsVarientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
