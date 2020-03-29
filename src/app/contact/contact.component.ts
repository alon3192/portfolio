import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private dataService:DataService) { }

  subscription:Subscription
  private emails = ["gmail.com", "AOL.com", "outlook.com", "zoho.com", "mail.com", "yahoo.com"]
  tmpEmails;
  message;
  sent;
  sub;
  displayEmails:boolean = true;
  email='';
  loader
  check
  answer:boolean
  
  ngOnInit() {

    window.addEventListener("scroll", this.scrollEvent)

    this.sent = document.getElementById("sent");
    this.sub = document.getElementById("sub");
    this.tmpEmails = [...this.emails];
    
    this.subscription = this.dataService.messageSended.subscribe(
      (answer: boolean) => {
        console.log(answer)
        this.answer = answer;
  
        if(answer) {
          this.startAnimation();
        }
        else {
          this.displayError();
        }   
      }); 
         
       
  }

  displayError() {
    
  }

  startAnimation() {
    var loader = document.querySelector('.loader'),
        check = document.querySelector('.check');
        loader.classList.add('active'); 
      loader.addEventListener('animationend', function() {
        check.classList.add('active'); 
     });
  }

  onSubmit(form:NgForm) {
    

    if(!form.valid) {
      if(form.value.name === '') {
        document.getElementById("namefield").style.border = "1px red solid";
      }
      if(form.value.email1 === '') {
        document.getElementById("email1field").style.border = "1px red solid";
      }
      if(form.value.email2 === '') {
        document.getElementById("email2field").style.border = "1px red solid";
      }
      if(form.value.message === '') {
        document.getElementById("textareafield").style.border = "1px red solid";
      }
    }
    else {

      document.getElementById("namefield").style.border = "unset";
      document.getElementById("email1field").style.border = "unset";
      document.getElementById("email2field").style.border = "unset";
      document.getElementById("textareafield").style.border = "unset";

      this.message = { name : form.value.name, email : form.value.email1 + "@" + form.value.email2, message: form.value.message, date: new Date() }
      this.dataService.newMessage(this.message);


    }
    
  }

  onChangeEmail() {

    this.tmpEmails = this.emails.filter(email => email.toUpperCase().includes(this.email.toUpperCase()));

    if(this.email === '' || this.tmpEmails.length === 0)
    {
      this.displayEmails = false;
    }
    else {
      this.displayEmails = true;
    }

    if(this.tmpEmails.length === 1 && this.email === this.tmpEmails[0]) {
      this.displayEmails = false;
    }
  }

  scrollEvent() {
  
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;


    let currentOffset =  window.pageYOffset;
    let languages_scroll = document.getElementById("text_contact");

    if((currentOffset + height) > languages_scroll.offsetTop) {
      languages_scroll.classList.add("animation_offset");
    }
    else {
      languages_scroll.classList.remove("animation_offset");
    }
  }



  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }
}
