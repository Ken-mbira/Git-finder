import { Component, OnInit, Input } from '@angular/core';
import { FollowingData } from '../following-data';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  @Input() followingInfo : FollowingData[] = [
    // new FollowingData("","","")
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
