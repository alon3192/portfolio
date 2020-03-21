import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subscription:Subscription;
  mode:boolean = true;
  header = document.getElementById('header');
  abo = document.getElementById("abo");
  res = document.getElementById("res");
  home = document.getElementById("home");
  

  constructor(private dataService:DataService) { }

  ngOnInit() { 
    
     window.addEventListener("scroll", this.changeClassName)
     
  }

 

  changeClassName()
  {
    let last_known_scroll_position = 0;
    last_known_scroll_position = window.scrollY;
    
    
    if(last_known_scroll_position === 0) {
      this.header.classList.remove('scroll_down');
      this.header.classList.add('scroll_back');

      this.abo.classList.remove('scroll_down_li');
      this.res.classList.remove('scroll_down_li');
      this.home.classList.remove('scroll_down_li');
    }
    else {
      this.header.classList.remove('scroll_back');
      this.header.classList.add('scroll_down');

      this.abo.classList.add("scroll_down_li");
      this.res.classList.add("scroll_down_li");
      this.home.classList.add("scroll_down_li");
    }
   
  }

  openResume()
  {
    window.open("https://drive.google.com/open?id=1XfOJuX4Tzr1OIdVUzz1fwS5qo4DKS37Z");
  }

  setOptionsMode()
  {
    this.dataService.setOptions(true);
  }


  sectionMove(section:string)
  {
    if(this.mode)
    {
      window.location.hash = '';
      window.location.hash = section;
    }
    
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }

}
