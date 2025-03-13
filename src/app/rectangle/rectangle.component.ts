import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  num2:number=0;
  num3:number=0;
  result:number=0;

  area(){
    this.result=this.num2*this.num3;
  }
  peri(){
    this.result=2*(this.num2+this.num3);
  }

}
