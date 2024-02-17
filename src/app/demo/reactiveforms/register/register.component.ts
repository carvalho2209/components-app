import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';
import { User } from './models/user';
import { GenericValidator, ValidationMessages, DisplayMessage } from './generic-form-validation';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  user!: User;
  formResult: string = '';
  registerForm!: FormGroup;

  validationMessages!: ValidationMessages;
  genericValidator!: GenericValidator;
  displayMessage: DisplayMessage = {};

  changesNotSaved: boolean;

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      name: {
        required: 'The name is required.',
        minlength: 'the name must have at least 2 characters.',
        maxlength: 'The name must have a maximum of 200 characters'
      },
      ssn: {
        required: 'The ssn is required'
      },
      email: {
        required: 'The email is required',
        email: 'email invalid'
      },
      password: {
        required: 'The password is required',
        rangeLength: 'The password must have at least between 5 and 15 caracteres'
      },
      confirmPassword: {
        required: 'The confirmPassword is required',
        rangeLength: 'The password must have at least between 5 and 15 caracteres',
        equalTo: 'password no match'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(this.registerForm);
      this.changesNotSaved = true;
    })
  }

  ngOnInit(): void {
    let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([5, 15])]);
    let confirmPass = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(password)]);

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      ssn: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: password,
      confirmPassword: confirmPass
    });
  }

  addUser() {
    this.user = Object.assign({}, this.user, this.registerForm.value);
    this.formResult = JSON.stringify(this.registerForm.value);

    this.changesNotSaved = false;
  }
}
