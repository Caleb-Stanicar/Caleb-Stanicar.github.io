import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NextPageComponent } from './next-page/next-page.component';
import { BoyPageComponent } from './boy-page/boy-page.component';
import { GirlPageComponent } from './girl-page/girl-page.component';
import { BroughtYouHereComponent } from './brought-you-here/brought-you-here.component';
import { SecondToLastComponent } from './second-to-last/second-to-last.component';
import { FinalPageComponent } from './final-page/final-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NextPageComponent,
    BoyPageComponent,
    GirlPageComponent,
    BroughtYouHereComponent,
    SecondToLastComponent,
    FinalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
