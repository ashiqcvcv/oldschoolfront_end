import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options : any[] = [
    {
      name : 'Pending Classes' , link : 'pendingClass',des : 'Check out the pending classes, and for rescheduling them'
    },{
      name : 'List Of Tutors', link : 'tutorList' , des : 'If you want to check the tutors available check here'
    },{
      name : 'Complaints &  queries', link : 'cnq', des : 'Go on with complaints and queries'
    },{
      name : 'Aptitude Test', link : 'aptitude' , des : 'If you wish to do a aptitude test go on with this'
    },{
      name : 'Change Tutor' , link : 'tutorChange', des : 'If you are not satisfied with the current tutor ask for replacement'
    },{
      name : 'Set Time Table', link : 'changeTimeTable', des : 'If you think you are not available for a time, just make it easy by informing us earlier'
    }
  ]

}
