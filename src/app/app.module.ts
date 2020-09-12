import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AuthInterceptor } from './landing/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './landing/auth.service';
import { AuthGuard } from './landing/auth.guard';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './landing/contact/contact.component';
import { StudentComponent } from './student/student.component';
import { TutorComponent } from './tutor/tutor.component';
import { HomeComponent } from './student/home/home.component';
import { ChatComponent } from './student/chat/chat.component';
import { TimetableComponent } from './student/timetable/timetable.component';
import { TtimetableComponent } from './tutor/ttimetable/ttimetable.component';
import { TchatComponent } from './tutor/tchat/tchat.component';
import { ThomeComponent } from './tutor/thome/thome.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    StudentComponent,
    TutorComponent,
    HomeComponent,
    ChatComponent,
    TimetableComponent,
    TtimetableComponent,
    TchatComponent,
    ThomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor, multi : true
  },AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
