import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Detail } from './detail.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

  projects:Project [] = [
    new Project("Safun", "safun_icon1.png", "An Android app for Live reporting from entertainment places.", "https://github.com/alon3192/Safun", ""),
    new Project("Gamefill", "soccer_icon1.png", "An android app for entering results and displayed them in various tables and statistics.", "https://github.com/alon3192/res", ""),
    new Project("Shopping-list", "shopping_icon1.png", "A website that helps organize the shopping list.", "https://github.com/alon3192/shopping-list", "https://shopping-list-d9877.firebaseapp.com/"),
    new Project("Meal Tracking", "meal-tracking1.png", "A website that allows to order food deliveries and then tracking them.", "https://github.com/alon3192/meal-tracking", "https://meal-tracking-86b90.firebaseapp.com/"), 
    new Project("Weather Forecast", "forecast-weather1.png", "A website that shows the weather forecast by location or city in the world by choice.", "https://github.com/alon3192/Alon-Moshe-03-01-2020", "https://alon-weather.herokuapp.com/"), 
  ];

  languages:Detail[] = [
    new Detail("Java", "../../assets/images/java_logo.png"),
    new Detail("C", "../../assets/images/c_logo.png"),
    new Detail("C#", "../../assets/images/c_sharp_logo.png"),
    new Detail("C++", "../../assets/images/cpp_logo.png"),
    new Detail(".NET", "../../assets/images/net_logo.png"),
    new Detail("Assembly", "../../assets/images/assembly_logo.png"),
    new Detail("HTML", "../../assets/images/html_logo.png"),
    new Detail("CSS", "../../assets/images/css_logo.png"),
    new Detail("SSAS", "../../assets/images/ssas_logo1.png"),
    new Detail("JavaScript", "../../assets/images/js_logo.png"),
    new Detail("TypeScript", "../../assets/images/ts_logo.png"),
    new Detail("php", "../../assets/images/php_logo.png"),
    new Detail("Visual Basic", "../../assets/images/vb_logo.png"),
    new Detail("SQL", "../../assets/images/sql_logo.png")
  ];
  workspaces:Detail[] = [
    new Detail("Android Studio", "../../assets/images/android_studio_logo.png"),
    new Detail("Eclipse", "../../assets/images/eclipse_logo.png"),
    new Detail("Visual Studio", "../../assets/images/visual_studio_logo.png"),
    new Detail("Visual Studio Code", "../../assets/images/visual_studio_code_logo.png"),
    new Detail("Access", "../../assets/images/access_logo.png"),
    new Detail("Xampp", "../../assets/images/xampp_logo.png")
  ];
  databases:Detail[] = [
    new Detail("Firebase", "../../assets/images/firebase_logo.png"),
    new Detail("MySQL", "../../assets/images/mysqli_logo.png")
  ];


  optionsChanged = new Subject<boolean>();
  messageSended = new Subject<boolean>();

  arrivals:Date[] = [];

 

  getProjects()
  {
    return this.projects.slice();
  }
  getLanguages()
  {
    return this.languages.slice();
  }
  getWorkspaces()
  {
    return this.workspaces.slice();
  }
  getDatabases()
  {
    return this.databases.slice();
  }
  setOptions(mode:boolean)
  {
    this.optionsChanged.next(mode);
  }

  setArrivals(dates:Date[])
   {
     this.arrivals = dates;
   }


  fetchDates()
  {
    this.http.get<Date[]>('https://portfolio-b36b9.firebaseio.com/newEnter.json')
    .subscribe(arrivals =>{
    this.setArrivals(arrivals); 
    })
  }

  newEnteryToTheWebsite()
  {
    
    const d: Date = new Date();
    d.setHours(d.getHours()+2);
    this.arrivals.push(d);
    this.http.post('https://portfolio-b36b9.firebaseio.com/newEntery.json',this.arrivals).subscribe(
      responseData=>{
      })
  }

  newMessage(message:Object)  {
    
    this.http.post('https://portfolio-b36b9.firebaseio.com/newMessage.json', message).subscribe(
      responseData=>{
        this.messageSended.next(true);
      }, error => {
        this.messageSended.next(false);
      })
  }

  


}


