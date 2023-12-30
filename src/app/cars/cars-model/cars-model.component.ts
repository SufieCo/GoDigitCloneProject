import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-cars-model',
  templateUrl: './cars-model.component.html',
  styleUrls: ['./cars-model.component.scss']
})
export class CarsModelComponent {
  modelData:any;
  Qbrand:any
  

  constructor(private http:HttpService, private activateRoute:ActivatedRoute){
//     this.Qbrand = this.activateRoute.snapshot.paramMap.get('brandName')
// console.log("brand query output", this.Qbrand)
  }

  ngOnInit(){
    this.getModel()
  }

  getModel(){
    this.http.getDataFromServer("brands").subscribe((response:any) => {
      if(response && response.length>0){
        this.modelData = response
        console.log("cars models are ", this.modelData)
      }
    })
    }

  
}
