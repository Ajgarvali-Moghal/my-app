import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  public userForm:FormGroup=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),  //validators
      class:new FormControl(),
      fatherName:new FormControl(),
      email:new FormControl(),
      date:new FormControl(),
      
      address:new FormGroup({
        addressLine:new FormControl(),
        city:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl(),
      }),
  
      // dynamicForms
  
      type:new FormControl(),
      // busFee:new FormControl(),
      // hostelFee:new FormControl(),
      cards: new FormArray([]),
    })
     constructor(){
      this.userForm.get('type')?.valueChanges.subscribe(
        (data:any)=>{
          if(data=='dayScholar'){
            this.userForm.addControl('busFee',new FormControl());
            this.userForm.removeControl('hostelFee');
          }else{
            this.userForm.addControl('hostelFee',new FormControl());
            this.userForm.removeControl('busFee');
          }
        }
      )
     }  
  
  
    submit(){
      console.log(this.userForm);
    }
  
    get cardsFormArray(){
      return this.userForm.get('cards') as FormArray;
    }
    addmarks(){
      this.cardsFormArray.push(
        new FormGroup({
          class:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl()
        })
      )
    }
    deletecard(i:number){
      this.cardsFormArray.removeAt(i);
    }

}
