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

  ngOnInit(){ }

  

  moveBack()
  {

    var audio = new Audio();
    audio.src = "../../assets/sounds/Stapling-Paper.mp3";
    audio.load();
    audio.play();

    if(this.currentNumber === 1)
    {
      this.currentNumber = this.maxNumber;
    }
    else
    {
      this.currentNumber--;
    }
    var image = document.getElementById("image");

    image.animate([
      // keyframes
      { transform: 'rotateZ(0deg)' }, 
      { transform: 'rotateZ(-20deg)'},
      { transform: 'rotateZ(0deg)' },
    ], { 
      // timing options
      duration: 600,
      iterations: 1
    });

    image.setAttribute("src", "../../assets/images/gamefill_" + this.currentNumber + ".jpg");
  }

  moveForward()
  {

    var audio = new Audio();
    audio.src = "../../assets/sounds/Stapling-Paper.mp3";
    audio.load();
    audio.play();

    if(this.currentNumber === this.maxNumber)
    {
      this.currentNumber = 1;
    }
    else
    {
      this.currentNumber++;
    }
    var image = document.getElementById("image");

    image.animate([
      // keyframes
      { transform: 'rotateZ(0deg)' }, 
      { transform: 'rotateZ(20deg)'},
      { transform: 'rotateZ(0deg)' },
    ], { 
      // timing options
      duration: 600,
      iterations: 1
    });

    image.setAttribute("src", "../../assets/images/gamefill_" + this.currentNumber + ".jpg");
  }

}
