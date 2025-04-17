import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  
})
export class RegistrationComponent implements OnInit{
    registerForm!: FormGroup;
    submitted = false;
    showpassword: boolean = false;
     
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required,Validators.pattern('^[A-Z][a-zA-Z]{2,}$')],
        lastName: ['', Validators.required, Validators.pattern('^[A-Z][a-zA-Z]{2,}$')],
        dob: this.formBuilder.group({
          start: ['', Validators.required],
          end: ['', Validators.required]
        }),
        email: ['', [Validators.required, Validators.email]],
        gender:['',[Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      });
    }
    onsubmit() {
      if (this.registerForm.valid) {
         console.log('onsubmit function called', this.registerForm.value);
        let data = {
          firstName: this.registerForm.value.firstName,
          lastName: this.registerForm.value.lastName,
          dob:this.registerForm.value.dob,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
          confirmPassword: this.registerForm.value.confirmPassword,

        };
        
      }
    
      
    }
    showhidepassword(){
      this.showpassword = !this.showpassword;
    }
  }
  

