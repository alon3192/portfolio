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
    new Project("Safun", "safun_icon1.png", "An Android app for live reporting from entertainment places that helps users decide where to spend time."),
    new Project("Gamefill", "soccer_icon1.png", "An app for the Android devices that write console games results. Displays various tables and statistics."),
    new Project("Shopping-list", "shopping_icon1.png", "A project based on a website that helps organize the shopping list."),
    new Project("Meal Tracking", "meal-tracking.png", "A project based on a website that allows to order food deliveries and then track the order."), 
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


