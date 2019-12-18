import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

  projects:Project [] = [
    new Project("Safun", "safun_icon1.png", "An Android app for live reporting from entertainment places that helps users decide where to spend time."),
    new Project("Gamefill", "soccer_icon1.png", "An app for the Android devices that write console games results. Displays various tables and statistics."),
    new Project("Shopping-list", "shopping_icon1.png", "A project based on a website that helps organize the shopping list."),
    new Project("Meal Tracking", "meal-tracking.png", "A project based on a website that allows to order food deliveries and then track the order."), 
  ];
  optionsChanged = new Subject<boolean>();

  arrivals:Date[] = [];

 

  getProjects()
  {
    return this.projects.slice();
  }
  setOptions(mode:boolean)
  {
    this.optionsChanged.next(mode);
  }

  setArrivals(dates:Date[])
   {
     this.arrivals = dates;
   }


  fetchProducts()
  {
    this.http.get<Date[]>('https://portfolio-b36b9.firebaseio.com/newEnter.json')
    .subscribe(arrivals =>{
    this.setArrivals(arrivals); 
    })
  }

  newEnterToTheWebsite()
  {
    
    const d: Date = new Date();
    d.setHours(d.getHours()+2);
    this.arrivals.push(d);
    this.http.post('https://portfolio-b36b9.firebaseio.com/newEnter.json',this.arrivals).subscribe(
      responseData=>{
      })
  }

  


}


