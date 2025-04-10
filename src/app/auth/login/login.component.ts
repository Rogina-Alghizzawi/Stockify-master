import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  savedUsers: string[] = [];

  constructor(private authService: AuthService
    ,
    private router: Router) { }
  ngOnInit(): void {

  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    // rememberMe: new FormControl(false)
  })


  onSubmit(): void {
    if (this.loginForm.valid) {

      // this.authService.login(this.loginForm.value);
this.authService.login(this.loginForm.value);

    }
  }
 


}
