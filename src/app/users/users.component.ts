import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../auth/token.storage';
import { UserProfileService } from '../services/user-profile.service';
  import { from } from 'rxjs';
  import {UserProfile} from '../models/user-profile';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  

  constructor(private token: TokenStorage ,private userProfileService: UserProfileService ) { }

  ngOnInit() {
    
  }

  
 

}
