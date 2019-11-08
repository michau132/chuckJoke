import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuniorComponent } from './junior/junior.component';
import { SeniorComponent } from './senior/senior.component';
import { AppService } from './app.service';
import { JokeResolverService } from './joke-resolver.service';

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
    AppService,
    JokeResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
