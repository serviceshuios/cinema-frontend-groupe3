import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from './component/film/film.component';

// définition des routes du projet
const routes: Routes = [
  { path: 'film', component: FilmComponent },


  // déclaration de la route par défaut
  {
    path: '',
    redirectTo: '/film',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
