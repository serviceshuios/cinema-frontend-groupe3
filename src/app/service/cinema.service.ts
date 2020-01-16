import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cinema } from '../models/cinema.model';
import { Salle } from '../models/salle.model';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) { }

    public getAllCinemas(): Observable<Cinema> {
    return this.httpClient.get<Cinema>(this.host + '/cinemas/');
  } // fin getAll

  public getCinema(id: number): Observable<Cinema> {
    return this.httpClient.get<Cinema>(this.host + '/cinemas/byId/' + id);
  } // fin getById

  public addCinema(cinema: Cinema): Observable<Cinema> {
     return this.httpClient.post<Cinema>(this.host + '/cinemas/', cinema);
  } // fin add

  public deleteCinema(id: number) {
    return this.httpClient.delete<Cinema>(this.host + '/cinemas/' + id);
  }// fin delete

  public chercherSallesCinema (id: number):Observable<Array<Salle>> {
    return this.httpClient.get<Array<Salle>>(this.host+'/cinemas/' + id+"/salles");
  }


} // fin classe
