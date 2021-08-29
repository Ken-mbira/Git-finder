import { Injectable } from '@angular/core';

import { SearchPageComponent } from './search-page/search-page.component'

@Injectable({
  providedIn: 'root'
})
export class UserNameService {
  getUserName(){
    return this.userDetails.profile.userName
  }

  constructor(public userDetails:SearchPageComponent) {
  }
}
