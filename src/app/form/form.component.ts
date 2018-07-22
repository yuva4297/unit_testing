import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
submitted=false;
checked=false;
  constructor() { }
  idform = new FormGroup({
    'firstname': new FormControl('', [Validators.required,Validators.minLength(2)]),
    'fullname': new FormControl('', Validators.required),
    'designation' : new FormControl('', Validators.required),    
    'email' : new  FormControl('',
     [Validators.required, Validators.pattern('^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com')]),
   
 });
 onSubmit():void{
   this.submitted=true;
   
 }
 click(){
   this.checked=true;
 }
  get firstname() {
    return this.idform.get('firstname');
  }
  get fullname() {
    return this.idform.get('fullname');
  }
  get designation() {
    return this.idform.get('designation');
  }
 
  get email() {
      return this.idform.get('email');
  }
 
}