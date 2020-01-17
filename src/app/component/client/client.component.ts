import { Component, OnInit } from '@angular/core';
import { VilleService } from 'src/app/service/ville.service';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemaService } from 'src/app/service/cinema.service';
import { ProjectionService } from 'src/app/service/projection.service';
import { SalleService } from 'src/app/service/salle.service';
import { Projection } from 'src/app/models/projection.model';
import { Place } from 'src/app/models/place.model';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  /*Les déclarations villes*/ 
  nomVille: "";
  idVille = 0;

  /*Les déclatation cinemas*/
  idCinema =0;

  afficherPlace: Array<Place> = [];
  cinemas: Array<Cinema> = [];

  villes;
  salles;
  projectionFilms;
  tickets: Array<Ticket> = [];



  constructor(private villeService: VilleService,
              private cinemaService: CinemaService,
              private salleService: SalleService,
              private projectionService: ProjectionService,
              private ticketService: TicketService) { }

  ngOnInit() {
    this.getAllVilles();
  }

  getAllVilles(){
    this.villeService.getAllVilles().subscribe(data =>{
      this.villes = data;
    });
  } // fin getAll

  chercherCinemas(nomVille: string) {
    this.villeService.getVillebyName(nomVille).subscribe(data => {
      this.idVille = data.id;
      this.villeService.chercherCinemasVille(this.idVille).subscribe(data2 => {
        this.cinemas = data2;
        this.nomVille = "";
        this.idVille = 0;
      })

    })
  } // fin cherchecinemas

    chercherProjections(idSalle: number) {
    this.salleService.chercherProjectionsSalle(idSalle).subscribe(data => {
      this.projectionFilms = data;
    })
  } // fin chercheProjections

  chercherTickets(projection: Projection) {
    this.projectionService.getAllTicketsProjection(projection.id).subscribe(data => {
      projection.tickets = data;
    })
  } // fin chercheProjections

  chercherSalles(idCinema: number) {
    this.cinemaService.chercherSallesCinema(idCinema)
    .subscribe (data =>{
      this.salles = data;
      this.salles.forEach(salle => {
        this.salleService.chercherProjectionsSalle(salle.id).subscribe(data =>{
          salle.projectionFilms = data;
        })
      });
      this.idCinema = 0;
    })
  }

  reserverPlace(nomClient: string, codePay: number, ticket: Ticket){
    ticket.nomClient = nomClient;
    ticket.codePayement = codePay;
    ticket.reservee = true;
    this.ticketService.updateTicket(ticket.id, ticket);
  }

} // fin classe


