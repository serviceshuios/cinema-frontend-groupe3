import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket = {
    id: 0 ,
    nomClient: '',
    prix:0 ,
    codePayement:0 ,
    reservee: null,
  }

  tickets;

  test = 0;

  constructor( private ticketService: TicketService) { }

  ngOnInit() {
    this.getAllTickets();
    this.test = 0;
  }

   saveTicket() {
    this.ticketService.addTicket(this.ticket)
    .subscribe(data => {
      this.ticket = data
      this.ticket.id = 0;
      this.ticket.nomClient = '';
      this.ticket.prix = 0;
      this.ticket.codePayement = 0;
      this.ticket.reservee = null;
      this.test = 0;
      this.getAllTickets();
    })
  } // fin save 

    getAllTickets() {
      this.ticketService.getAllTickets()                      
      .subscribe (data => {
        this.tickets = data
        this.test = 0;
      })
    } // getAll 

    detailTicket(id: number) {
      this.ticketService.getTicket(id)
      .subscribe (data => {
        this.ticket = data;
        this.test = 1;
      })
    } // fin detail

    deleteTicket (id: number) {
      this.ticketService.deleteTicket(id)
      .subscribe (data =>{
      this.getAllTickets();
      this.test = 0;
      })
    } // fin delete


}// fin classe
