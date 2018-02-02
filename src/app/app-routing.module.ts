import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LandingComponent } from './landing/landing.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionsComponent } from './questions/questions.component';


const appRoutes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'questions/:id', component: QuestionsComponent},
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
