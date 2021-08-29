import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { UserDetailsServiceService } from '../user-details-service.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repoInfo = new Repository("","","","",new Date())
  constructor(userDetails: UserDetailsServiceService) { }

  ngOnInit(): void {
  }

}
