import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { FilmComponent } from './component/film/film.component';
import { AppRoutingModule } from './app-routing.module';
import { VilleComponent } from './component/ville/ville.component';
import { CinemaComponent} from './component/cinema/cinema.component';
import { SalleComponent } from './component/salle/salle.component';
import { PlaceComponent } from './component/place/place.component';
import { SeanceComponent } from './component/seance/seance.component';
import { TicketComponent } from './component/ticket/ticket.component';
import { ProjectionfilmComponent } from './component/projectionfilm/projectionfilm.component';
import { AccueilComponent } from './component/accueil/accueil.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { ClientComponent } from './component/client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    FilmComponent,
    VilleComponent,
    AccueilComponent,
    CinemaComponent,
    SalleComponent,
    PlaceComponent,
    SeanceComponent,
    TicketComponent,
    ProjectionfilmComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
