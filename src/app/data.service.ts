import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects:Project [] = [
    new Project("Safun", "safun_icon.png", "An Android app for live reporting from entertainment places that helps users decide where to spend time."),
    new Project("Gamefill", "soccer_icon.png", "An app for the Android devices that write console games results. Displays various tables and statistics."),
    new Project("Shopping-list", "shopping_icon.jpg", "A project based on a website that helps organize the shopping list.")
  ];

  constructor() { }

  getProjects()
  {
    return this.projects.slice();
  }
}


