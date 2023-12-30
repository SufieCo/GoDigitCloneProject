import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-cars-varient',
  templateUrl: './cars-varient.component.html',
  styleUrls: ['./cars-varient.component.scss']
})
export class CarsVarientComponent {
  varientsData:any
  varientsFuelData:any
  varientsEFuelData:any

  constructor(private http:HttpService){

  }
ngOnInit(){
  this.getData()
  this.FuelData()
  this.electricFuelData()
}
petrolModel:any
getData(){
  this.http.getDataFromServer("get-variant").subscribe((response:any) =>{
    if(response && response.length>0){
      this.varientsData = response
      console.log("varients data rec" , this.varientsData) 
      // const filteredPeople = people.filter(person => person.name === "John Doe" && person.age > 25);
      // this.petrolModel = this.varientsData.map((el:any)=>el.modelList["Fuel Type"])
      // this.petrolModel = this.varientsData.filter((el:any) => el.modelList["Fuel Type"]==="Electric"
      this.petrolModel = this.varientsData.flatMap((item:any) => item.modelList.filter((variant:any) => variant["Fuel Type"] === "Petrol"));
      console.log(this.petrolModel);
      //  this.petrolModel = this.varientsData.filter((el:any) => (el.modelList["Fuel Type"] == "Petrol"))
      console.log("models with Petrol" , this.petrolModel)
    }  
  })
}

dieselModel:any
FuelData(){
  this.http.getDataFromServer("get-variant").subscribe((response1:any) =>{
    if(response1 && response1.length>0){
      this.varientsFuelData = response1
      console.log("varients Fuel data rec" , this.varientsFuelData)
      this.dieselModel = this.varientsFuelData.flatMap((item:any) => item.modelList.filter((variant:any) => variant["Fuel Type"] === "Diesel"));
    }
  })
}

electricModel:any
electricFuelData(){
  this.http.getDataFromServer("get-variant").subscribe((response2:any) =>{
    if(response2 && response2.length>0){
      this.varientsEFuelData = response2
      console.log("electric varients Fuel data rec" , this.varientsEFuelData)
      this.electricModel = this.varientsEFuelData.flatMap((item:any) => item.modelList.filter((variant:any) => variant["Fuel Type"] === "Electric"));
    }
  })
}


diesel:boolean = true
petrol:boolean = false
valid:boolean = false
show:string = ""
SelectedPreference(data:any){
  this.show = data.target.value
  this.valid = !this.valid
}
electricVarient:any
sElectric:boolean = false
selectElectric(){
  if(this.sElectric = false){
    // this.electricVarient=this.electricModel
  }
  
}
toggelVarient:any
tDiesel:boolean = false
toggleButtonChange1(){
  if(this.tDiesel = true){
    this.toggelVarient=this.electricModel 
  }
}
}
