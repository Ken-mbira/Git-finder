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
    if(environment.production === false){
      return this.http.get(`https://api.github.com/users/${userName}?access_token=${environment.apiKey}`)
    }else {
      return this.http.get(`https://api.github.com/users/${userName}?access_token=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`)
    }
  }
  repoMaker(userName){
    if(environment.production === false){
      return this.http.get(`https://api.github.com/users/${userName}/repos?access_token=${environment.apiKey}`)
    }else {
      return this.http.get(`https://api.github.com/users/${userName}/repos?access_token=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`)
    }
  }
  followerMaker(userName){
    if(environment.production === false){
      return this.http.get(`https://api.github.com/users/${userName}/follower?access_token=${environment.apiKey}`)
    }else {
      return this.http.get(`https://api.github.com/users/${userName}/follower?access_token=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`)
    }
  }
  followingMaker(userName){
    if(environment.production === false){
      return this.http.get(`https://api.github.com/users/${userName}/following?access_token=${environment.apiKey}`)
    }else {
      return this.http.get(`https://api.github.com/users/${userName}/following?access_token=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`)
    }
  }


}
