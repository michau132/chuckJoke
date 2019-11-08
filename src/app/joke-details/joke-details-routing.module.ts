import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokeDetailsComponent } from './joke-details.component';


const routes: Routes = [
  {
    path: '',
    component: JokeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeDetailsRoutingModule { }
