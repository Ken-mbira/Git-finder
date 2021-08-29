import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  @Input() repoInfo: Repository[] = [
    {projectName: "", description:"", link : "", language :"", lastUpdated: new Date()}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
