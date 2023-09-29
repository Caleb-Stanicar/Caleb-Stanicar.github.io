import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NextPageComponent } from './next-page/next-page.component';
import { BoyPageComponent } from './boy-page/boy-page.component'; // Import the new component
import { GirlPageComponent } from './girl-page/girl-page.component'; // Import the GirlPageComponent
import { BroughtYouHereComponent } from './brought-you-here/brought-you-here.component';
import { SecondToLastComponent } from './second-to-last/second-to-last.component';
import { FinalPageComponent } from './final-page/final-page.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'next-page', component: NextPageComponent },
  { path: 'boy-page', component: BoyPageComponent }, // Define a route for the boy page
  { path: 'girl-page', component: GirlPageComponent }, // Define a route for the girl page
  { path: 'brought-you-here', component: BroughtYouHereComponent },
  { path: 'second-to-last', component: SecondToLastComponent },
  { path: 'final-page', component: FinalPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
