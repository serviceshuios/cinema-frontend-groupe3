import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/service/ticket.service';
import { Place } from 'src/app/models/place.model';
import { Projection } from 'src/app/models/projection.model';
import { PlaceService } from 'src/app/service/place.service';
import { ProjectionService } from 'src/app/service/projection.service';

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
    place: new Place(),
    projection: new Projection()
  }

  places;

  projections;

  tickets;

  test = 0;

  constructor( private ticketService: TicketService, private placeService: PlaceService, private projectionService: ProjectionService) { }

  ngOnInit() {
    this.getAllTickets();
    this.getAllSalles();
    this.getAllProjections();
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
      this.getAllSalles();
      this.getAllProjections();
      this.ticket.place = new Place();
      this.ticket.projection = new Projection();
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

    getAllSalles() {
      this.placeService.getAllPlaces()
      .subscribe (data => {
        this.places = data
        this.test = 0;
      })
    } // getAll

    getAllProjections() {
      this.projectionService.getAllProjections()
      .subscribe (data => {
        this.projections = data
        this.test = 0;
      })
    } // getAll


}// fin classe
