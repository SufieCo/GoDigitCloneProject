import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsModelComponent } from './cars-model.component';

describe('CarsModelComponent', () => {
  let component: CarsModelComponent;
  let fixture: ComponentFixture<CarsModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsModelComponent]
    });
    fixture = TestBed.createComponent(CarsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
