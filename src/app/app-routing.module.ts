import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuniorComponent } from './junior/junior.component';
import { SeniorComponent } from './senior/senior.component';
import { JokeResolverService } from './joke-resolver.service';


const routes: Routes = [
  {path: 'junior', component: JuniorComponent},
  {path: 'senior', component: SeniorComponent},
  {
    path: 'senior/:id',
    loadChildren: () => import('./joke-details/joke-details.module').then(m => m.JokeDetailsModule),
    resolve: {joke: JokeResolverService}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
