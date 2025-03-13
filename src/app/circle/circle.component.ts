import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  num2:number=0;
  result:number=0;
  pi:number=3.14159265359;

  a(){
    this.result=this.pi *(this.num2*this.num2);
  }
  p(){
    this.result=2*this.pi*this.num2;
  }

}
