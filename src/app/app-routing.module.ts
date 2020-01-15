import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from './component/film/film.component';
import { VilleComponent } from './component/ville/ville.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CinemaComponent } from './component/cinema/cinema.component';
import { SalleComponent } from './component/salle/salle.component';
import { SeanceComponent } from './component/seance/seance.component';
import { PlaceComponent } from './component/place/place.component';
import { TicketComponent } from './component/ticket/ticket.component';
import { ProjectionfilmComponent } from './component/projectionfilm/projectionfilm.component';
import { ClientComponent } from './component/client/client.component';
import { AdminComponent } from './component/admin/admin.component';


// définition des routes du projet
const routes: Routes = [
  { path: 'film', component: FilmComponent },
  { path: 'ville', component: VilleComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: 'salle', component: SalleComponent },
  { path: 'seance', component: SeanceComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'place', component: PlaceComponent },
  { path: 'projectionfilm', component: ProjectionfilmComponent },
  { path: 'client', component: ClientComponent },
  { path: 'admin', component: AdminComponent },


  // déclaration de la route par défaut
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
