import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  HeroesComponent,
  HeroDetailComponent,
  MessagesComponent,
} from './components';
import { HeroService, MessageService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
