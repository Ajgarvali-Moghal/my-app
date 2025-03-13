import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  height:number=0;
  weight:number=0;
  result:number=0;
  height2:number=0;

  cal(){
   this.height2=this.height/100;
    this.result=this.weight/(this.height2*this.height2)
  }

}
