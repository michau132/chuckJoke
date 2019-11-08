import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeDetailsComponent } from './joke-details.component';
import { JokeDetailsRoutingModule } from './joke-details-routing.module';

@NgModule({
  declarations: [JokeDetailsComponent],
  imports: [
    CommonModule,
    JokeDetailsRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [JokeDetailsComponent]
})
export class JokeDetailsModule {}
