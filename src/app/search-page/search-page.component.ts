import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  profile = new User("","",0,0,0,"")
  constructor() { }

  ngOnInit(): void {
  }

}
