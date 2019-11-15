import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/user-profile';
import { UserProfileService } from '../services/user-profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: UserProfile = new UserProfile();
  roleId:any;

  constructor(private userCreation: UserProfileService) { }

  ngOnInit() {
  }

  //onSubmit. POST REQUEST TO SERVER
  createUser() {
    // this.userProfile.password = 'Auto Generator';
    this.roleId = 1; //to add field for role
    console.log(this.userProfile.name + ' ' + this.userProfile.email + ' ' + this.userProfile.username + ' ' + this.userProfile.password);
    this.userCreation.createUserProfile(this.roleId, this.userProfile).subscribe(data => {
      console.log('###################done ' + data);
    })
  }


}
