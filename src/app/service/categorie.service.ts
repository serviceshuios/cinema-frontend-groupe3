import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  public host = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) { }

    public getAllCategories(): Observable<Categorie> {
    return this.httpClient.get<Categorie>(this.host+'/categories/');
  } // fin getAll

  public getCategorie(id:number):Observable<Categorie> {
    return this.httpClient.get<Categorie>(this.host+'/categories/'+id);
  } // fin getById

  public addCategorie(categorie:Categorie) {
     return this.httpClient.post<Categorie>(this.host+'/categories/', categorie);
  } // fin add

  public deleteCategorie(id:number) {
    return this.httpClient.delete<Categorie>(this.host+'/categories/'+ id);
  }// fin delete

  public updateCategorie (id:number,categorie:Categorie) {
    return this.httpClient.put<Categorie>(this.host+'/categories/'+ id,categorie);
  }// fin update





} // fin classe

