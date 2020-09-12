import { Component, OnInit } from '@angular/core';
import { AuthService } from '../landing/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
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
      name : 'Exam' , link : 'exam' , icon : 'fa fa-pencil'
    },{
      name : 'Time Table', link : 'timetable' , icon : 'fa fa-calendar-check-o'
    }
  ]

  constructor(public authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  
  onLogout(){
    this.authService.deleteToken();
    this.router.navigate(['/landing']);
  }

}
