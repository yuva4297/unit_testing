import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create name control',()=>{
    expect(component.idform.contains('firstname')).toBeTruthy();
    expect(component.firstname).not.toBeNull();
    expect(component.fullname).not.toBeNull();
    expect(component.designation).not.toBeNull(); 
  });
  it('designation should have minimum length of 2',()=>{
    let desig = component.idform.controls['designation'];
    desig.setValue("C");
    expect(component.idform.valid).toBeFalsy();
    expect(component.idform.controls['designation'].valid).toBeTruthy();

  })

  it('email field validity', () => {
    let errors = {};
    let email = component.idform.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@virtusa.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });
});
