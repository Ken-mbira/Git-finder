import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http:HttpClient) {
  }
  private clientId = environment.clientId
  private clientSecret = environment.clientSecret

  userMaker(userName){
    return this.http.get(`https://api.github.com/users/${userName}?${this.clientId}&client_secret=${this.clientSecret}`)
  }
  repoMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/repos?${this.clientId}&client_secret=${this.clientSecret}`)

  }
  followerMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/follower?${this.clientId}&client_secret=${this.clientSecret}`)
  }
  followingMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/following?${this.clientId}&client_secret=${this.clientSecret}`)
  }


}
