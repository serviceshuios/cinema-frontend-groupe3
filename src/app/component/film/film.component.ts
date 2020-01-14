import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  //récupére le film saisie
  film: Film = {
    id: 0,
    titre: '',
    //realisateur: '',
    duree: 0,
    description: '',
    photo: '',
    dateSortie: null
  }

  // liste des categories
  films;


  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getAllFilms();
  }

  saveFilm() {
    this.filmService.addFilm(this.film)
    .subscribe(data => {
      this.film = data
      this.film.id = 0;
      this.film.titre = '';
      // this.film.realisateur = '';
      this.film.duree = 0;
      this.film.description= '';
      this.film.photo='';
      this.film.dateSortie= null;
      this.getAllFilms();
    })
  } // fin save 

    getAllFilms() {
      this.filmService.getAllFilms()                      
      .subscribe (data => {
        this.films = data
      })
    } // getAll 

    detailFilm(id: number) {
      this.filmService.getFilm(id)
      .subscribe (data => {
        this.film = data;
      })
    } // fin detail

    deleteFilm (id: number) {
      this.filmService.deleteFilm(id)
      .subscribe (data =>{
        this.getAllFilms();
      })
    } // fin delete


} // fin classe
