import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  arrow_up;

  constructor() { }

  ngOnInit() {

    this.arrow_up = document.getElementById("arrow_up");

    window.addEventListener("scroll", this.arrowOption)
    

  }

  arrowOption() {
    let last_known_scroll_position = window.scrollY;
    if(last_known_scroll_position === 0) {
      this.arrow_up.classList.add('arrow_hide');
      this.arrow_up.classList.remove('arrow_show');
    }
    else {
      this.arrow_up.classList.add('arrow_show');
      this.arrow_up.classList.remove('arrow_hide');
    }
    
  }

 
  openLinkedin()
  {
    window.open("https://www.linkedin.com/in/alon-moshe-79b80118a/");
  }

  upToTheBegin() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  

}
