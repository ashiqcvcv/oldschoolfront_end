import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thome',
  templateUrl: './thome.component.html',
  styleUrls: ['./thome.component.css']
})
export class ThomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options : any[] = [
    {
      name : 'Pending Classes' , link : 'pendingClass',des : 'Check out the pending classes, and for rescheduling them'
    },{
      name : 'List Of Students', link : 'tutorList' , des : 'Check the students who you guides'
    },{
      name : 'Complaints &  queries', link : 'cnq', des : 'Go on with complaints and queries'
    },{
      name : 'Get Student Detail', link : 'aptitude' , des : 'If you want to get the details, please give request'
    },{
      name : 'Change Chapter' , link : 'tutorChange', des : 'If you complete the current chapter click here'
    },{
      name : 'Set Time Table', link : 'changeTimeTable', des : 'If you think you are not available for a time, just make it easy by informing us earlier'
    }
  ]
}
