import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroDetailComponent, HeroesComponent, MessagesComponent } from './components/';
import { HeroService, MessagesService } from './services/';
import { HeroDetailComponent, HeroesComponent, MessagesComponent, DashboardComponent, HeroSearchComponent } from './components/';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    HeroService, MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
