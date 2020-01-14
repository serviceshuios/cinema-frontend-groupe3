import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from '../models/place.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  public host = "http://localhost:8082";

  constructor(private httpClient: HttpClient) { }

   public getAllPlaces(): Observable<Place>{
   return this.httpClient.get<Place>(this.host+"/places/")
  }

   public getPlace(id:number): Observable<Place>{
    return this.httpClient.get<Place>(this.host+'/places/'+id);
  }

     public addPlace(place: Place): Observable<Place>{
    return this.httpClient.post<Place>(this.host+'/places/',place);
  }

     public deletePlace(id:number): Observable<Place>{
    return this.httpClient.delete<Place>(this.host+'/places/'+id);
  }

     public updatePlace(id:number, place: Place): Observable<Place>{
    return this.httpClient.put<Place>(this.host+'/places/'+id,place);
  }
}
