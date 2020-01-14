import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cinema } from '../models/cinema.model';

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
    return this.httpClient.get<Cinema>(this.host + '/cinemas/' + id);
  } // fin getById

  public addCinema(cinema: Cinema) {
     return this.httpClient.post<Cinema>(this.host + '/cinemas/', cinema);
  } // fin add

  public deleteCinema(id: number) {
    return this.httpClient.delete<Cinema>(this.host + '/cinemas/' + id);
  }// fin delete

}
