import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from './component/film/film.component';

// d�finition des routes du projet
const routes: Routes = [
  { path: 'film', component: FilmComponent },


  // d�claration de la route par d�faut
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
