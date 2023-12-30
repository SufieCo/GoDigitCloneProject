import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'bike', loadChildren: () => import('./bike/bike.module').then(m => m.BikeModule) }, { path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
