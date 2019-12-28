import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {

  constructor(private dataService:DataService, private router: Router) { }
  
  projects:Project[] = [];
  
  ngOnInit() {
    this.projects = this.dataService.getProjects();
  }

  projectClicked(project:Project)
  {
    if(project.name === 'Shopping-list')
    {
      window.open('https://shopping-list-d9877.firebaseapp.com/');
    }
    else if(project.name === 'Meal Tracking')
    {
      window.open('https://meal-tracking-86b90.firebaseapp.com/');
    }
    else
    {
      this.dataService.setOptions(false);
      window.scroll(0,0);
      this.router.navigate([project.name]);
    }
  }

  
  writeContent(project:Project)
  {
    if(project.name === 'Shopping-list')
    {
      return "Website";
    }
    return "Android App";
  }

}
