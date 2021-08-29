import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

import { User } from '../user';
import { ProfileServiceService } from './../profile-http/profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName = {};
  bio:any;
  repoNumber:any;
  followers:any;
  following:any;
  avatar:any;
  found:true;

  userMaker(){
    this.profileService.userMaker()
      .subscribe(userData=>{
        this.userName = userData
      })
  }
  profile : User[] = [
    new User("", "", 0, 0, 0,"")
  ];

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

  constructor(private profileService:ProfileServiceService){
  }


  ngOnInit(): void {
  }

}
