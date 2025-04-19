import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private formBuilder: FormBuilder, private user: UserService , private snackBar : MatSnackBar) {}

  ngOnInit() {
    this.signIn = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$') ]],
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
        next: (result) => {
          console.log(result);
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
