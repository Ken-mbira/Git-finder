import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../user';
import { ProfileComponent } from '../profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  userProfile: any;
  username: string;

  constructor(private http:HttpClient) {
  }

  userMaker(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos?access_token=${environment.apiKey}`)
  }


}
