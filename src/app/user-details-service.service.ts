import { Injectable } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsServiceService {

  getUserInfo(){
    return this.userInfo.profile
  }
  constructor(public userInfo:UserProfileComponent) { }
}
