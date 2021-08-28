import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  profile : User;

  constructor(private http:HttpClient) {
    this.profile = new User("","",0,0,0,"");
  }


}
