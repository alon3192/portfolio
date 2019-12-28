import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-safun',
  templateUrl: './view-safun.component.html',
  styleUrls: ['./view-safun.component.scss']
})
export class ViewSafunComponent implements OnInit {

  minNumber = 1;
  maxNumber = 15;
  currentNumber = 1;
  

  constructor() { }

  ngOnInit() {
  }

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

    image.setAttribute("src", "../../assets/images/safun_" + this.currentNumber + ".jpg");
  }

  moveForward()
  {

    var audio = new Audio();
    audio.src = "../../assets/sounds/Stapling-Paper.mp3";
    audio.load();
    audio.play();


    if(this.currentNumber === this.maxNumber)
    {
      this.currentNumber = this.minNumber;
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

    image.setAttribute("src", "../../assets/images/safun_" + this.currentNumber + ".jpg");
  }


  onOpenProjextBook()
  {
    window.open('https://drive.google.com/open?id=1ymQ7j-9Ipq059vFMV1FrYzekeao-vPJf');
  }

 


  

}
