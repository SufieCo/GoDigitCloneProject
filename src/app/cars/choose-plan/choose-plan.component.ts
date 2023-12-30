import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss']
})
export class ChoosePlanComponent {
  selectedValue: number = 0;
compPriceA:number = 0;


total:number = 0
totaly:number = 0
PAcover:boolean= false
Pcover:boolean= false
PDcover:boolean= false

PAcoverValue:number = 0
PcoverValue:number = 0
PDcoverValue:number = 0
inputV:number = 633000;






checkBoxChange1(){

if(this.PAcover = true){
  this.PAcoverValue = 220
}
if(this.PAcover = false){
  this.PAcoverValue = 0
}


return


}
checkBoxChange2(){

   
  if(this.Pcover = true){
    this.PcoverValue = 750
  }
  
  return
  
  
  }
  checkBoxChange3(){

    if(this.PDcover = true){
      this.PDcoverValue = 300
    }
    
    return
   
    }


totalPrice(){
  this.total = this.compPriceA + this.PAcoverValue + this.PcoverValue + this.PDcoverValue
  this.totaly = this.total * 12
}






  onValueChange() {
    this.compPriceA = this.inputV / 424 
  console.log("comprehensive price " ,this.compPriceA)
    // Use this.selectedValue for further processing or actions
    
    console.log('Selected value:', this.selectedValue);

    this.inputV = this.selectedValue
  }
constructor(private http:HttpService){}
  ngOnInit(){
    this.getPlanData() 
  }
planData:any
  getPlanData(){
    this.http.getDataFromServer("get-eligible-plan").subscribe((response:any)=>{
      if(response && response.length >0){
        this.planData = response;
        console.log("plan data are", this.planData)
      }
    })
  }
}
