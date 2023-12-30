import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarsBrandComponent } from './cars-brand/cars-brand.component';
import { CarsModelComponent } from './cars-model/cars-model.component';
import { CarsVarientComponent } from './cars-varient/cars-varient.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarsComponent,
    CarsBrandComponent,
    CarsModelComponent,
    CarsVarientComponent,
    ChoosePlanComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule
  ]
})
export class CarsModule { }
