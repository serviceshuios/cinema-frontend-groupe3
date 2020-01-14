import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from './component/film/film.component';
import { VilleComponent } from './component/ville/ville.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { AccueilComponent } from './component/accueil/accueil.component';

// d�finition des routes du projet
const routes: Routes = [
  { path: 'film', component: FilmComponent },
  { path: 'ville', component: VilleComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'accueil', component: AccueilComponent },


  // d�claration de la route par d�faut
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
