import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  pinterestData:any=[];
  constructor(private _pinterestService:PinterestService){
  _pinterestService.getPinterest().subscribe(
    (data:any)=>{
      console.log(data);
      this.pinterestData=data;
    }
  )
  }

}
