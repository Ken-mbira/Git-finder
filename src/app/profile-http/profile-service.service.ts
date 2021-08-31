import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http:HttpClient) {
  }

  userMaker(userName){
    return this.http.get(`https://api.github.com/users/${userName}?access_token=${environment.apiKey}`)
  }
  repoMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/repos?access_token=${environment.apiKey}`)

  }
  followerMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/follower?access_token=${environment.apiKey}`)
  }
  followingMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/following?access_token=${environment.apiKey}`)
  }


}
