import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

   public host = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) { }

    public getAllTickets(): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.host+'/tickets/');
  } // fin getAll

  public getTicket(id:number):Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.host+'/tickets/'+id);
  } // fin getById

  public addTicket(ticket:Ticket) {
     return this.httpClient.post<Ticket>(this.host+'/tickets/', ticket);
  } // fin add

  public deleteTicket(id:number) {
    return this.httpClient.delete<Ticket>(this.host+'/tickets/'+ id);
  }// fin delete

  public updateTicket (id:number,ticket:Ticket) {
    return this.httpClient.put<Ticket>(this.host+'/tickets/'+ id,ticket);
  }// fin update





} // fin classe
