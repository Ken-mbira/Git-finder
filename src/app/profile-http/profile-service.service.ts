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
    return this.http.get(`https://api.github.com/users/${userName}?access_token=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`)
  }
  repoMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/repos?access_token=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`)

  }
  followerMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/follower?access_token=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`)
  }
  followingMaker(userName){
      return this.http.get(`https://api.github.com/users/${userName}/following?access_token=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`)
  }


}
