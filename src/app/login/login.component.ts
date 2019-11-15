import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login-model';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  roleId:any;

  constructor(private newSession: LoginService, private router:Router) { }

  ngOnInit() {
  }

  //onSubmit. POST REQUEST TO SERVER
  initiateLogin() {
    // this.userProfile.password = 'Auto Generator';
    // this.roleId = 1; //to add field for role
    // console.log(this.login.username + ' ' + this.login.password);
    // this.newSession.newLogin(this.roleId, this.login).subscribe(data => {
    //   console.log('###################done ' + data);
    // })
    this.router.navigate(['dashboard']);
  }


}
