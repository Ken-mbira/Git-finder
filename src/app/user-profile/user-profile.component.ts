import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile = new User("");

  searchUser(submitted){

    if(submitted){
      alert(this.profile.userName)
    }
  }

  showRepos(){
    this.profile.showRepo = true;
    this.profile.showFollowers= false;
    this.profile.showFollowing = false;
  }
  showFollowers(){
    this.profile.showRepo = false;
    this.profile.showFollowers= true;
    this.profile.showFollowing = false;
  }
  showFollowing(){
    this.profile.showRepo = false;
    this.profile.showFollowers= false;
    this.profile.showFollowing = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
