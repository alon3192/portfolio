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

   window.addEventListener("scroll", this.scrollEvent)

  }

  scrollEvent() {
  
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;


    let currentOffset =  window.pageYOffset;
    let languages_scroll = document.getElementById("languages");
    let workspaces_scroll = document.getElementById("workspaces");
    let databases_scroll = document.getElementById("databases");

    if((currentOffset + height) > languages_scroll.offsetTop) {
      languages_scroll.classList.add("animation_offset");
    }
    else {
      languages_scroll.classList.remove("animation_offset");
    }
    if((currentOffset + height) > workspaces_scroll.offsetTop) {
      workspaces_scroll.classList.add("animation_offset");
    }
    else {
      workspaces_scroll.classList.remove("animation_offset");
    }
    if((currentOffset + height) > databases_scroll.offsetTop) {
      databases_scroll.classList.add("animation_offset");
    }
    else {
      databases_scroll.classList.remove("animation_offset");
    }
  }
  

}
