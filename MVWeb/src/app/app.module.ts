import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FacebookModule } from 'ngx-facebook';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    AppComponent,
    //RegisterComponent,
    //LoginComponent,
    PagesComponent,
    ErrorpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FacebookModule.forRoot(),
    NgxSkeletonLoaderModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
