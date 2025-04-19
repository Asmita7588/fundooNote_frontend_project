import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  
})
export class RegistrationComponent implements OnInit{
    registerForm!: FormGroup;
    submitted = false;
    showpassword: boolean = false;

    constructor(private formBuilder: FormBuilder, private user : UserService, private snackBar: MatSnackBar, private router :Router) {}

    ngOnInit(){
      this.createRegistrationForm();
    }

    createRegistrationForm(){
      this.registerForm = this.formBuilder.group({
            firstName: ['',[ Validators.required,Validators.pattern('^[A-Z][a-zA-Z]{2,}$')]],
            lastName: ['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]{2,}$')]],
            dob:['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            gender:['',[Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]],
            confirmPassword: ['', Validators.required],
          },{
            validators: this.matchPassword('password', 'confirmPassword')  
          });
    }

    onsubmit(){
      this.submitted = true;
      if (this.registerForm.valid){
      console.log(this.registerForm.value);
      // this.user = this.registerForm.value
      // localStorage.setItem('Users',JSON.stringify(this.user));
      const payload={
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        dob:this.registerForm.value.dob,
        gender: this.registerForm.value.gender,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
       }
      this.user.register(payload).subscribe({
        next:(result)=>{
          console.log(result);

          this.router.navigateByUrl('dashboard/signin');

          this.snackBar.open('Signup successful!', 'Close', {
            duration: 3000,  
            horizontalPosition: 'center', 
            verticalPosition: 'top', 
          });
        },
        error:(err)=>{
          console.log(err);
        }
       });
      }
    }

    matchPassword(password: string, confirmPassword: string): ValidatorFn {
      return (formGroup: AbstractControl): { [key: string]: any } | null => {
        const pass = formGroup.get(password);
        const confirmPass = formGroup.get(confirmPassword);
    
        if (pass && confirmPass && pass.value !== confirmPass.value) {
          confirmPass.setErrors({ passwordMismatch: true });
          return { passwordMismatch: true };
        } else {
          if (confirmPass?.hasError('passwordMismatch')) {
            confirmPass.setErrors(null);
          }
          return null;
        }
      }
    }
    showhidepassword(){
      this.showpassword = !this.showpassword;
    }
  }

  
    
