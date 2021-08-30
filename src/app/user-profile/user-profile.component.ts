import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { Repository } from '../repository';
import { ProfileServiceService } from '../profile-http/profile-service.service';
import { FollowerData } from './../follower-data';
import { FollowingData } from '../following-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile = new User("","",0,0,0,"");
  userDetails: any;
  showInfo:boolean = false;

  repoInfo: Repository[] = [
    
  ];
  repoDetails:any;

  followerInfo: FollowerData[] = [
  ]
  followerDetails:any;

  followingInfo: FollowingData[] = []
  followingDetails:any;

  addNewUser(userInfo){
    this.showInfo = true;
    this.profileService.userMaker(userInfo.userName)
      .subscribe(userData=>{
        this.userDetails = userData
        this.profile.userName = this.userDetails.login;
        this.profile.bio = this.userDetails.bio;
        this.profile.avatar = this.userDetails.avatar_url;
        this.profile.followers = this.userDetails.followers;
        this.profile.following = this.userDetails.following;
        this.profile.repoNumber = this.userDetails.public_repos;
      })
    this.profileService.repoMaker(userInfo.userName)
      .subscribe(repoData=>{
        this.repoDetails = repoData;
        for (let index = 0; index < this.repoDetails.length; index++) {
          this.repoInfo[index] = new Repository("","","","",new Date)
          this.repoInfo[index].projectName = this.repoDetails[index].name;
          this.repoInfo[index].description = this.repoDetails[index].description;
          this.repoInfo[index].language = this.repoDetails[index].language;
          this.repoInfo[index].link = this.repoDetails[index].html_url;
          this.repoInfo[index].lastUpdated = this.repoDetails[index].updated_at;
          this.repoInfo.push(this.repoInfo[index])
        }
      })
    this.profileService.followerMaker(userInfo.userName)
      .subscribe(followerData=>{
        this.followerDetails = followerData;
        for (let index = 0; index < this.followerDetails.length; index++) {
          this.followerInfo[index] = new FollowerData("","","");
          this.followerInfo[index].followerName = this.followerDetails[index].login;
          this.followerInfo[index].followerPicture = this.followerDetails[index].avatar_url;
          this.followerInfo[index].followerLink = this.followerDetails[index].html_url;
          this.followerInfo.push(this.followerInfo[index])
        }
      })
    this.profileService.followingMaker(userInfo.userName)
      .subscribe(followingData=>{
        this.followingDetails = followingData;
        for (let index = 0; index < this.followingDetails.length; index++) { 
          this.followingInfo[index] = new FollowingData("","","");
          this.followingInfo[index].followingName = this.followingDetails[index].login;
          this.followingInfo[index].followingPicture = this.followingDetails[index].avatar_url;
          this.followingInfo[index].followingLink = this.followingDetails[index].html_url;
          this.followerInfo.push(this.followerInfo[index])
          console.log(this.followingInfo[index])
        } 
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
