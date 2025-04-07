import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
   isVisible:boolean=true;
   states:string[]=['ANDHRA PRADESH','TELANGANA','TAMILNADU','KERALA'];
  products:any=[
    {name:'pen', price:10,ratings:3.7},
    {name:'book', price:510,ratings:2.7},
    {name:'shirt', price:810,ratings:4.7},
    {name:'shoes', price:2310,ratings:2.8},
    {name:'bike', price:105000,ratings:5.0},
    {name:'car', price:505000,ratings:3.2}
  ]
  newDate:any=new Date();

}
