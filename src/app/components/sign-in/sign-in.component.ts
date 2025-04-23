import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signIn!: FormGroup;
  submitted = false;
  showForgotPassword: boolean = false;
  constructor(private formBuilder: FormBuilder, private user: UserService , private snackBar : MatSnackBar, private router: Router) {}

  ngOnInit() {
    this.signIn = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8) ]],
    });
  }
  onsubmit() {
    if (this.signIn.valid) {
      console.log('onsubmit function called', this.signIn.value);
      
      let data = {
        email: this.signIn.value.email,
        password: this.signIn.value.password,
      };
      
      this.user.signIn(data).subscribe({
        next: (result: any) => {
          console.log(result);
           localStorage.setItem('authToken', result.data);
           this.router.navigateByUrl('/dashboard/notes')
          this.snackBar.open('Signin successful!', 'Close', {
            duration: 3000,  
            horizontalPosition: 'center', 
            verticalPosition: 'top', 
          });
        },
        error:(err)=>{
          console.log(err);
        },
      });
    }
  }

  toggleForgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
  }
}
