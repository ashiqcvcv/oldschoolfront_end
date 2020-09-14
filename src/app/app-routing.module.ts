import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './landing/auth.guard';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './landing/contact/contact.component';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { HomeComponent } from './student/home/home.component';
import { ChatComponent } from './student/chat/chat.component';
import { TimetableComponent } from './student/timetable/timetable.component';
import { ThomeComponent } from './tutor/thome/thome.component';
import { TtimetableComponent } from './tutor/ttimetable/ttimetable.component';
import { TchatComponent } from './tutor/tchat/tchat.component';

const routes: Routes = [
  {
    path : 'landing', component : LandingComponent
  },
  {
    path : 'contact', component : ContactComponent
  },
  {
    path : 'about', component : AboutComponent
  },
  {
    path : 'student', component: StudentComponent,canActivate:[AuthGuard],
    children : [
      {
        path : 'home', component : HomeComponent
      },{
        path :'', component : HomeComponent
      },{
        path : 'chat', component : ChatComponent
      },{
        path : 'timetable', component :  TimetableComponent
      }
    ]
  },
  {
    path : 'tutor', component: TutorComponent,canActivate:[AuthGuard],
    children : [
      {
        path : 'home', component : ThomeComponent
      },{
        path :'', component : ThomeComponent
      },{
        path : 'chat', component : TchatComponent
      },{
        path : 'timetable', component :  TtimetableComponent
      }
    ]
  },
  {
    path : '', redirectTo : '/landing',pathMatch:'full'
  },{
    path : 'landing', redirectTo : '/landing',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
