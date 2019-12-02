import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myself',
  templateUrl: './myself.component.html',
  styleUrls: ['./myself.component.css']
})
export class MyselfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openResume()
  {
    window.open("https://drive.google.com/open?id=1QOwqCxkfnCuCVMbQieCwyUMtotXmNz8P");
  }

}
