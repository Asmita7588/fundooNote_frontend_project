import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
 signIn! :FormGroup;
 submitted = false;
 showForgotPassword: boolean = false;
 constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signIn = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }
  onsubmit() {
    if (this.signIn.valid) {
      console.log('onsubmit function called', this.signIn.value);
      let data = {
        email: this.signIn.value.email,
        password: this.signIn.value.password,
      };
      
    }
  }

  toggleForgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
  }
}
