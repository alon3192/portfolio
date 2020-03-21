import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Detail } from '../detail.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private dataService:DataService) { }


  languages:Detail[] = [];
  workspaces:Detail[] = [];
  databases:Detail[] = [];

  ngOnInit() {
   this.languages = this.dataService.getLanguages();
   this.workspaces = this.dataService.getWorkspaces();
   this.databases = this.dataService.getDatabases();
  }
  

}
