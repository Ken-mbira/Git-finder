import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { ProfileServiceService } from '../profile-http/profile-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile = new User("","",0,0,0,"");
  userDetails: any;

  addNewUser(userInfo){
    this.profileService.userMaker(userInfo.userName)
      .subscribe(userData=>{
        this.userDetails = userData
        this.profile.userName = this.userDetails.name;
        this.profile.bio = this.userDetails.bio;
        this.profile.avatar = this.userDetails.avatar_url;
        this.profile.followers = this.userDetails.followers;
        this.profile.following = this.userDetails.following;
        this.profile.repoNumber = this.userDetails.public_repos;
        console.log(this.userDetails)
      })
  }
  

  showRepos() {
    this.profile.showRepo = true;
    this.profile.showFollowers = false;
    this.profile.showFollowing = false;
  }
  showFollowers() {
    this.profile.showRepo = false;
    this.profile.showFollowers = true;
    this.profile.showFollowing = false;
  }
  showFollowing() {
    this.profile.showRepo = false;
    this.profile.showFollowers = false;
    this.profile.showFollowing = true;
  }
  constructor(private profileService: ProfileServiceService) { }

  ngOnInit(): void {
  }

}
