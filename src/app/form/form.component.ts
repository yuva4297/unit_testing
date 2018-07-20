import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }
  idform = new FormGroup({
    'firstname': new FormControl('', [Validators.required,Validators.minLength(2)]),
    'fullname': new FormControl('', Validators.required),
    'designation' : new FormControl('', Validators.required),
    'empid' : new FormControl('' ,
    [Validators.pattern(/^[8|6][0-9]{6}$/), Validators.required]),
    'bloodgroup' : new FormControl('', Validators.required),
    'email' : new  FormControl('',
     [Validators.required, Validators.pattern('^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com')]),
     'contact' : new FormGroup({
      'mobnum': new FormControl('',  [ Validators.pattern('^[9|8][0-9]{9}$')]),
     'emernum': new FormControl('', [Validators.pattern('^[9|8][0-9]{9}$') ])
     }, this.atleastOneMobNum)
 });
  get firstname() {
    return this.idform.get('firstname');
  }
  get fullname() {
    return this.idform.get('fullname');
  }
  get designation() {
    return this.idform.get('designation');
  }
  get empid() {
    return this.idform.get('empid');
  }
  get blood() {
    return this.idform.get('bloodgroup');
  }
  get email() {
      return this.idform.get('email');
  }
  get contact() {
    return this.idform.get('contact');
  }
  get mobnum() {
    return this.idform.get('mobnum');
  }
  atleastOneMobNum(control: AbstractControl): ValidationErrors|null {
    const mnum = control.get('mobnum');
    const emernum = control.get('emernum');
     console.log(mnum);
    if ( mnum.value === '' && emernum.value === '') {
      return {
        'atleastOneMobNum': true
      };
    }
  return null;
  }
}