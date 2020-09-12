import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public router : Router,private http : HttpClient) { }
  sendmail = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    subject : new FormControl('',Validators.required),
    message : new FormControl('',Validators.required),
    mobno : new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }
  sendMail(){
    if (this.sendmail.valid) {
      const email = this.sendmail.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mgengarv',
        { name: email.name, replyto: email.email, message: 'subject :' + email.subject + ', message :' +email.message+', mob no:'+email.mobno },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
    this.router.navigateByUrl('/landing');

  }
}
