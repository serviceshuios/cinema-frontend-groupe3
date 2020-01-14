import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { FilmComponent } from './component/film/film.component';
import { AppRoutingModule } from './app-routing.module';
import { VilleComponent } from './component/ville/ville.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    FilmComponent,
    VilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
