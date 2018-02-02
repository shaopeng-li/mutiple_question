import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionsComponent } from './questions/questions.component';

import { AppRoutingModule } from './app-routing.module';
import { questionsService } from './service/questions.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PagenotfoundComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [questionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
