import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/account/login/login.component';
import { SiginComponent } from './pages/account/sigin/sigin.component';
import { Calendar } from './pages/date-picker/calendar/calendar.component';
import { LoginService } from './pages/account/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PhoneComponent,
    HomeComponent,
    Calendar,
    LoginComponent,
    SiginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
