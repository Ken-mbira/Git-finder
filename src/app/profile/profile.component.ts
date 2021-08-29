import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { ProfileServiceService } from './../profile-http/profile-service.service';
import { UserNameService } from '../user-name.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails : any;
  userName:string;

  userMaker(){
    this.profileService.userMaker(this.userName)
      .subscribe(userData=>{
        this.userDetails = userData
      })
  }
  profile : User[] = [
    new User("")

  ]
  showRepos(index){
    this.profile[index].showRepo = true;
    this.profile[index].showFollowers= false;
    this.profile[index].showFollowing = false;
  }
  showFollowers(index){
    this.profile[index].showRepo = false;
    this.profile[index].showFollowers= true;
    this.profile[index].showFollowing = false;
  }
  showFollowing(index){
    this.profile[index].showRepo = false;
    this.profile[index].showFollowers= false;
    this.profile[index].showFollowing = true;
  }

  constructor(private profileService:ProfileServiceService, public userNameService:UserNameService){
  }


  ngOnInit(): void {
  }

}
