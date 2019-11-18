import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login-model';
import { AuthService } from '../services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorage } from '../auth/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  roleId:any;

  constructor(private authService: AuthService, private router:Router, private token: TokenStorage) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.authService.attemptAuth(this.login).subscribe(res => {
      this.token.saveSessionDetails(res.responseBody.roles[0].id, res.responseBody.email);
      console.log(this.token.getToken());

      if (res.statusCode == 200) {
        console.log(res.statusCode);
        this.router.navigate(['dashboard']);
      } 
    }, error => {
      
      console.log(error.message);
    });
  }


}
