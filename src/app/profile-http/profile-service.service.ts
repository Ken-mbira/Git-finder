import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  userProfile: any;
  username: string;

  constructor(private http:HttpClient) {
  }

  userMaker(userName){
    return this.http.get(`https://api.github.com/users/${userName}/repos?access_token=${environment.apiKey}`)
  }


}
