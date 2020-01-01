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
  pic;
  

  constructor() { }

  ngOnInit() {
    this.pic = document.getElementById("image"); 
    
  }

  
  goForwoard()
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
      this.pic.setAttribute("src", "../../assets/images/safun_".concat(this.currentNumber.toString()).concat(".jpg"));
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
      this.pic.setAttribute("src", "../../assets/images/safun_".concat(this.currentNumber.toString()).concat(".jpg"));
    }, 1000);
    
    this.pic.classList.add("moving_back");

    setTimeout(()=>{    
      this.pic.classList.remove("moving_back");
    }, 2100);
  }


  onOpenProjextBook()
  {
    window.open('https://drive.google.com/open?id=1ymQ7j-9Ipq059vFMV1FrYzekeao-vPJf');
  }

 


  

}
