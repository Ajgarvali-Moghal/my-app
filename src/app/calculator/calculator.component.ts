import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num2:number=0;
  num3:number=0;
  result:number=0;
  add(){
    this.result=this.num2+this.num3;
  }
  div(){
    this.result=this.num2%this.num3;
  }
  mul(){
    this.result=this.num2*this.num3;
  }
  sub(){
    this.result=this.num2-this.num3;
  }

}
