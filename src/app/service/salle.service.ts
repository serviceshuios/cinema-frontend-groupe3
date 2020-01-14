import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle.model';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  public host = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) { }

    public getAllSalles(): Observable<Salle> {
    return this.httpClient.get<Salle>(this.host + '/salles/');
  } // fin getAll

  public getSalle(id: number): Observable<Salle> {
    return this.httpClient.get<Salle>(this.host + '/salles/' + id);
  } // fin getById

  public addSalle(salle: Salle) {
     return this.httpClient.post<Salle>(this.host + '/salles/', salle);
  } // fin add

  public deleteCinema(id: number) {
    return this.httpClient.delete<Salle>(this.host + '/salles/' + id);
  }// fin delete
}
