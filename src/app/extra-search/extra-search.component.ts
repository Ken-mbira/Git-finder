import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-extra-search',
  templateUrl: './extra-search.component.html',
  styleUrls: ['./extra-search.component.css']
})
export class ExtraSearchComponent implements OnInit {
  newUser = new User("","",0,0,0,"");
  @Output() submitted = new EventEmitter<User>();

  addUser(){
    this.submitted.emit(this.newUser);
  }

  constructor(){
  }

  ngOnInit(): void {
  }

}
