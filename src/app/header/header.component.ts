import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription:Subscription;
  mode:boolean = true;
  
  

  constructor(private dataService:DataService, private location: Location) { }

  ngOnInit() { 

    if(this.location.path() !== '')
    {
      var pro = document.getElementById("pro");
      var abo = document.getElementById("abo");

      pro.style.color = "gray";
      pro.style.cursor = "auto";
      pro.style.textDecoration = "none";
          
      abo.style.color = "gray";
      abo.style.cursor = "auto";
      abo.style.textDecoration = "none";
    }

    this.subscription = this.dataService.optionsChanged.subscribe(
      (mode: boolean) => {
        this.mode = mode
        
        if(!this.mode)
        {
          var pro = document.getElementById("pro");
          var abo = document.getElementById("abo");

          pro.style.color = "gray";
          pro.style.cursor = "auto";
          pro.style.textDecoration = "none";
          
          abo.style.color = "gray";
          abo.style.cursor = "auto";
          abo.style.textDecoration = "none";
        }
        else
        {
          var pro = document.getElementById("pro");
          var abo = document.getElementById("abo");

          pro.style.color = "black";
          pro.style.cursor = "pointer";
          
          abo.style.color = "black";
          abo.style.cursor = "pointer";

          
            pro.addEventListener('mouseover', e => {
              if(this.mode)
              {
                pro.style.color = "white";
                pro.style.textDecoration = "underline";
              }
              
            });
  
            pro.addEventListener('mouseleave', e => {
              if(this.mode)
              {
                pro.style.color = "black";
                pro.style.textDecoration = "none";
              }
              
            });
  
            abo.addEventListener('mouseover', e => {
              if(this.mode)
              {
                abo.style.color = "white";
                abo.style.textDecoration = "underline";
              }
              
            });
  
            abo.addEventListener('mouseleave', e => {
              if(this.mode)
              {
                abo.style.color = "black";
                abo.style.textDecoration = "none";
              }
              
            });  
        }
      }
    ); 
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
