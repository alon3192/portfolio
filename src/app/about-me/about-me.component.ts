import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var java = document.getElementsByClassName[1]('img_container');
    window.onmousemove = function (e) {
      var x = e.clientX,
          y = e.clientY;
          java.style.top = (y + 20) + 'px';
          java.style.left = (x + 20) + 'px';
  };
  }
  

}
