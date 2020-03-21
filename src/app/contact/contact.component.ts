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

  ngOnInit() {

    this.sent = document.getElementById("sent");
    this.sub = document.getElementById("sub");
    this.tmpEmails = [...this.emails];

    this.subscription = this.dataService.messageSended.subscribe(
      (answer: boolean) => {
          this.sub.disabled = true;
        });

        
        document.addEventListener('DOMContentLoaded', function () {
          var btn = document.querySelector('.button'),
              loader = document.querySelector('.loader'),
              check = document.querySelector('.check');
          
          btn.addEventListener('click', function () {
            loader.classList.add('active'); 
          });
         
          loader.addEventListener('animationend', function() {
            check.classList.add('active'); 
          });
        });
        
  }

  onSubmit(form:NgForm) {
    console.log("dsa")
    
    this.message = { name : form.value.name, email : form.value.email1 + "@" + form.value.email2, message: form.value.message }
    this.dataService.newMessage(this.message)
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

  ngOnDestroy()
  {
    this.subscription.unsubscribe()
  }
}
