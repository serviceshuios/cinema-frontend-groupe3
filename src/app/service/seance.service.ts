import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seance } from '../models/seance.model';
import { Projection } from '../models/projection.model';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  public host = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) { }

  public getAllSeances(): Observable<Seance> {
    return this.httpClient.get<Seance>(this.host + '/seances/');
  } // fin getAll

  public getSeance(id: number): Observable<Seance> {
    return this.httpClient.get<Seance>(this.host + '/seances/' + id);
  } // fin getById

  public addSeance(seance: Seance) {
    return this.httpClient.post<Seance>(this.host + '/seances/', seance);
  } // fin add

  public deleteSeance(id: number) {
    return this.httpClient.delete<Seance>(this.host + '/seances/' + id);
  }// fin delete

  public getSeanceProjection(id: number): Observable<Projection> {
    return this.httpClient.get<Projection>(this.host + '/seances/' + id + '/projections');
  } // fin getById

}
