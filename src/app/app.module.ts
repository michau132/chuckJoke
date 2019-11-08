import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuniorComponent } from './junior/junior.component';
import { SeniorComponent } from './senior/senior.component';
import { JokeService } from './core/services/joke.service';
import { JokeResolverService } from './core/reslovers/joke-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    JuniorComponent,
    SeniorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    JokeService,
    JokeResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
