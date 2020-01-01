import { Component, OnInit, HostBinding } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';



@Component({
  selector: 'app-view-gamefill',
  templateUrl: './view-gamefill.component.html',
  styleUrls: ['./view-gamefill.component.scss']
})
export class ViewGamefillComponent implements OnInit {

  constructor() { }
  minNumber = 1;
  maxNumber = 9;
  currentNumber = 1;
  pic;

  ngOnInit(){
    this.pic = document.getElementById("image");
   }


  goForward()
  {
    if(this.currentNumber === this.maxNumber)
    {
      this.currentNumber = this.minNumber;
    }
    else
    {
      this.currentNumber++;
    }
    setTimeout(()=>{    
      this.pic.setAttribute("src", "../../assets/images/gamefill_" + this.currentNumber + ".jpg");
    }, 1000);
    
    this.pic.classList.add("moving_forward");

    setTimeout(()=>{    
      this.pic.classList.remove("moving_forward");
    }, 2100);
  }
  
  goBack()
  {
    if(this.currentNumber === 1)
    {
      this.currentNumber = this.maxNumber;
    }
    else
    {
      this.currentNumber--;
    }
    setTimeout(()=>{    
      this.pic.setAttribute("src", "../../assets/images/gamefill_".concat(this.currentNumber.toString()).concat(".jpg"));
    }, 1000);
    
    this.pic.classList.add("moving_back");

    setTimeout(()=>{    
      this.pic.classList.remove("moving_back");
    }, 2100);
  }

}
