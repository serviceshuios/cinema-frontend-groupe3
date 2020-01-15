import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projection } from 'src/app/models/projection.model'

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {

  public host = "http://localhost:8082";

  constructor(private httpClient: HttpClient) { }

  public getAllProjections(): Observable<Projection>{
   return this.httpClient.get<Projection>(this.host+"/projections/")
  }

   public getProjection(idFilm: number, idSalle: number): Observable<Projection>{
    return this.httpClient.get<Projection>(this.host+'/projections/'+idFilm+"/"+idSalle);
  }

  public addProjection(projection: Projection): Observable<Projection>{
     return this.httpClient.post<Projection>(this.host+'/projections/',projection);
  }

     public deleteProjection(id:number): Observable<Projection>{
    return this.httpClient.delete<Projection>(this.host+'/projections/'+id);
  }

     public updateProjection(id:number, projection: Projection): Observable<Projection>{
    return this.httpClient.put<Projection>(this.host+'/projections/'+id,projection);
  }
}
