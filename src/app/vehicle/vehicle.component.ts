import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  term:string='';
  constructor(private _vehicleService:VehicleService){
   this.loadVehicles(); //method 
  }
  loadVehicles() {        
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      }, (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal server error!")
    }
    )
  }

  column:string='';
  order:string='';

  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal server error!");
      }
    )
  }

  delete(id:any){
    if(confirm("Are you sure to delete?")==true){  //confirm is a angular prompt
      this._vehicleService.deleteVehicle(id).subscribe(
        (data:any)=>{
          alert("Record deleted sucessfully")
          this.loadVehicles(); //we are calling the method for reloading the data after deleting
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
    this._vehicleService.getPaginatedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
