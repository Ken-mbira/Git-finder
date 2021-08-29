import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-extra-search',
  templateUrl: './extra-search.component.html',
  styleUrls: ['./extra-search.component.css']
})
export class ExtraSearchComponent implements OnInit {

  @Input() user = new User("");

  @Output() submitted = new EventEmitter<boolean>();

  startSearch(submit:boolean){
    this.submitted.emit(submit)
  }
  constructor(){
  }

  ngOnInit(): void {
  }

}
