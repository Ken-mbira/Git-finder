import { Component, OnInit, Input } from '@angular/core';
import { FollowerData } from '../follower-data';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  @Input() followerInfo : FollowerData[] = [
    new FollowerData("","","")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
