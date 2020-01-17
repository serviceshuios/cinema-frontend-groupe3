import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projection } from 'src/app/models/projection.model'
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {

  public host = "http://localhost:8082";

  constructor(private httpClient: HttpClient) { }

  public getAllProjections(): Observable<Projection> {
   return this.httpClient.get<Projection>(this.host + '/projections/')
  }

  public getAllTicketsProjection(id: number): Observable<Array<Ticket>> {
   return this.httpClient.get<Array<Ticket>>(this.host + '/projections/' + id + '/tickets')
  }

  public getProjection(id: number): Observable<Projection> {
    return this.httpClient.get<Projection>(this.host + '/projections/' + id);
  } // fin getById

  public addProjection(projection: Projection) {
     return this.httpClient.post<Projection>(this.host + '/projections/', projection);
  } // fin add

  public deleteProjection(id: number) {
    return this.httpClient.delete<Projection>(this.host + '/projections/' + id);
  }// fin delete
}

