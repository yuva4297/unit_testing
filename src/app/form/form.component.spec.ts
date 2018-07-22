import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{By} from '@angular/platform-browser';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DebugElement } from '@angular/core';


describe('FormComponent', () => {
  let component: FormComponent;
let de:DebugElement;
let el:HTMLElement;
let input:Element;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpModule],
      declarations: [ FormComponent ]
    })
    .compileComponents().then(()=>{
      fixture=TestBed.createComponent(FormComponent);
      component=fixture.componentInstance;
      input = fixture.debugElement.query(By.css('#mob_Q1')).nativeElement;
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
    });
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

it('should set submitted to true',async(()=>{
  component.onSubmit();
  expect(component.submitted).toBeTruthy();
}));
it('should call the onSubmit method',async(()=>{
  fixture.detectChanges();
  spyOn(component,'onSubmit');
  el=fixture.debugElement.query(By.css('button')).nativeElement;
  el.click();
  expect(component.onSubmit).toHaveBeenCalledTimes(0);
}));
 it('email field validity', () => {
    let errors = {};
    let email = component.idform.controls['email'];
    expect(email.valid).toBeFalsy();

    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });
it('should validate the pattern of email field',()=>{
  let errors = {};
  let email = component.idform.controls['email'];
  email.setValue("test");
  errors = email.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['pattern']).toBeTruthy();

 
  email.setValue("test@virtusa.com");
  errors = email.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['pattern']).toBeFalsy();

});

});
