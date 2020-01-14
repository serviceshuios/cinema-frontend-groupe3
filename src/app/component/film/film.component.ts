import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/service/film.service';
import { CategorieService } from 'src/app/service/categorie.service';
import { Categorie } from 'src/app/models/categorie.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  // récupére le film saisie
  film: Film = {
    id: 0,
    titre: '',
    // realisateur: '',
    duree: 0,
    description: '',
    photo: '',
    dateSortie: null
  };

  // liste des categories
  films;

  categories;

  constructor(private filmService: FilmService, private categorieService: CategorieService) { }

  ngOnInit() {
    this.getAllFilms();
    this.getAllCategories();
  }

  saveFilm() {
    this.filmService.addFilm(this.film)
    .subscribe(data => {
      this.film = data;
      this.film.id = 0;
      this.film.titre = '';
      // this.film.realisateur = '';
      this.film.duree = 0;
      this.film.description = '';
      this.film.photo = '';
      this.film.dateSortie = null;
      this.getAllFilms();
      this.getAllCategories();
    });
  } // fin save

    getAllFilms() {
      this.filmService.getAllFilms()
      .subscribe (data => {
        this.films = data;
      });
    } // getAll

    detailFilm(id: number) {
      this.filmService.getFilm(id)
      .subscribe (data => {
        this.film = data;
      });
    } // fin detail

    deleteFilm(id: number) {
      this.filmService.deleteFilm(id)
      .subscribe (data => {
        this.getAllFilms();
      });
    } // fin delete

    getAllCategories() {
      this.categorieService.getAllCategories()
      .subscribe (data => {
        this.categories = data;
      });
    } // getAll

} // fin classe
