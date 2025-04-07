import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
     accounts:any=[];
 
  constructor(private _accountsService:AccountsService){ 
    this.loadAccounts();
  }
  loadAccounts(){
    this._accountsService.getAccounts().subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  //filter
  term:String='';
  filter(){
    this._accountsService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  //sorting
  column:string='';
  order:string='';
  sort(){
    this._accountsService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal server error!");
      }
    )
  }

  delete(id:any){
    if(confirm("Are you sure to delete?")==true){  //confirm is a angular prompt
      this._accountsService.deleteAccounts(id).subscribe(
        (data:any)=>{
          alert("Record deleted sucessfully")
          this.loadAccounts(); //we are calling the method for reloading the data after deleting
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
    }else{
      alert("you have cancelled!")
    }
  }

  limit:string='';
  page:string='';
  pagination(){
    this._accountsService.getPaginatedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  
}
