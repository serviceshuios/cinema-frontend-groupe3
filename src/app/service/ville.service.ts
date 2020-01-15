import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ville } from '../models/ville.model';
import { Observable } from 'rxjs';
import { Cinema } from '../models/cinema.model';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

public host = "http://localhost:8082";

  constructor(private httpClient: HttpClient) { }


  public getAllVilles(): Observable<Ville>{
   return this.httpClient.get<Ville>(this.host+"/villes/")
  }

   public getVille(id:number): Observable<Ville>{
    return this.httpClient.get<Ville>(this.host+'/villes/'+id);
  }

     public addVille(ville: Ville): Observable<Ville>{
    return this.httpClient.post<Ville>(this.host+'/villes/',ville);
  }

     public deleteVille(id:number): Observable<Ville>{
    return this.httpClient.delete<Ville>(this.host+'/villes/'+id);
  }

     public updateVille(id:number, ville: Ville): Observable<Ville>{
    return this.httpClient.put<Ville>(this.host+'/villes/'+id,ville);
  }

  public chercherCinemasVille(id:number): Observable<Array<Cinema>>{
    return this.httpClient.get<Array<Cinema>>(this.host+'/villes/'+id+"/cinemas");
  }
}
