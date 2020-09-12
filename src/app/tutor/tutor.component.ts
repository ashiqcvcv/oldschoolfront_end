import { Component, OnInit } from '@angular/core';
import { AuthService } from '../landing/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  navItems:any[] = [
    {
      name : 'Home', link : 'home', icon : 'fa fa-home'
    },{
      name : 'Chat', link : 'chat', icon : "fa fa-envelope"
    },{
      name : 'Class', link : 'video', icon : 'fa fa-file-movie-o'
    },{
      name : 'Materials', link : 'materials', icon : 'fa fa-book'
    },{
      name : 'Schedule Exam' , link : 'exam' , icon : 'fa fa-pencil'
    },{
      name : 'Time Table', link : 'timetable' , icon : 'fa fa-calendar-check-o'
    }
  ]

  constructor(public authService : AuthService,private router: Router) { }

  ngOnInit(): void {
    let body = document.querySelector('.modal-open');
    body.classList.remove('modal-open');
    body.removeAttribute('style');
    let divFromHell = document.querySelector('.modal-backdrop');
    body.removeChild(divFromHell);
  }
  onLogout(){
    this.authService.deleteToken();
    this.router.navigate(['/landing']);
  }

}
