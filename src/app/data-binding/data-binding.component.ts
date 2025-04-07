import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  // two way data binding
  // mobile:string='+91';
  // submit(){
  //   alert(this.mobile);
  // }

  // num1:number=0;
  // num2:number=0;
  // result:number=0;
  // add(){
  //   console.log(this.num1,this.num2);
  //   this.result=this.num1+this.num2;
  //   console.log(this.result);
  // } 

  
    // ajgar:any='';

    // press(){
    //   alert(this.ajgar)
    // }
    
    // clicking(){
    //   alert('hai man')
    // }
    // key(){
    //   alert('hai')
    // }
    // price:any=0;
    // age:string='ajgar';

    // submit:boolean=false;

    // num:any='';

    number:any=[
      { name:'ajgar',surname:'moghal',mobile:'987678'},
      { name:'h',surname:'jj',mobile:'987678'},
      { name:'hh',surname:'s',mobile:'987678'},
      { name:'kj',surname:'d',mobile:'987678'},
      { name:'yu',surname:'x',mobile:'987678'},
      { name:'kk',surname:'dd',mobile:'987678'},
      { name:'dsds',surname:'dd',mobile:'987678'},
      { name:'ss',surname:'dd',mobile:'987678'},
      { name:'ff',surname:'dd',mobile:'987678'},
      { name:'dd',surname:'hh',mobile:'987678'},

    ]

    isvisible:any=false;
}
