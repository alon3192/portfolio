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
    if(project.webSrc !== '')
    {
      window.open(project.webSrc);
    }
    else
    {
      this.dataService.setOptions(false);
      window.scroll(0,0);
      this.router.navigate([project.name]);
    }
   
  }

   openGit(project:Project)
   {
     window.open(project.gitSrc);
   }


}
