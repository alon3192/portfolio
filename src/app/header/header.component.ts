import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  sectionMove(section:string)
  {
    
    window.location.hash = '';
    window.location.hash = section;
    console.log(window.location);
  }

}
