import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public host = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) { }

  public getAllFilms(): Observable<Film> {
    return this.httpClient.get<Film>(this.host + '/films/');
  } // fin getAll

  public getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(this.host + '/films/ById/' + id);
  } // fin getById

   public getFilmbyTitre(titre: string): Observable<Film> {
    return this.httpClient.get<Film>(this.host + '/films/byTitre/' + titre);
  } // fin getById

  public addFilm(film: Film) {
    return this.httpClient.post<Film>(this.host + '/films/', film);
  } // fin add

  public deleteFilm(id: number) {
    return this.httpClient.delete<Film>(this.host + '/films/' + id);
  }// fin delete

  public updateFilm(id: number, film: Film) {
    return this.httpClient.put<Film>(this.host + '/films/' + id, film);
  }// fin update


}
