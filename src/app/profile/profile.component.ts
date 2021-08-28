import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { ProfileServiceService } from './../profile-http/profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile : User[] = [
    new User("Ken Mbira", "blah blah blah", 1, 2, 1,"sdfadfasf")
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

  constructor(){
  }

  ngOnInit(): void {
  }

}
