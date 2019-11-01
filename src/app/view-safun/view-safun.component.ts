import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-safun',
  templateUrl: './view-safun.component.html',
  styleUrls: ['./view-safun.component.css']
})
export class ViewSafunComponent implements OnInit {

  numOfPic = 1;
  address = "../../assets/images/safun_" + this.numOfPic + ".jpg";

  next_class="switch_next";
  

  constructor() { }

  ngOnInit() {
  }

  switchImage(whereTo:number)
  {
    this.numOfPic+=whereTo;
    this.numOfPic = this.numOfPic % 16;

    

    if(this.numOfPic === 0)
      { 
        if(whereTo > 0)
        {
          this.numOfPic++
        }
        else
        {
          this.numOfPic = 15;
        }
       
      }
    this.address = "../../assets/images/safun_" + this.numOfPic + ".jpg";
  }

  onOpenProjextBook()
  {
    window.open('https://drive.google.com/open?id=1ymQ7j-9Ipq059vFMV1FrYzekeao-vPJf');
  }

 


  

}
