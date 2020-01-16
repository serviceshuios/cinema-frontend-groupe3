import { Component, OnInit } from '@angular/core';
import { VilleService } from 'src/app/service/ville.service';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemaService } from 'src/app/service/cinema.service';

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


  cinemas: Array<Cinema> = [];

  villes;
  salles;


  constructor(private villeService: VilleService, private cinemaService: CinemaService) { }

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

  chercherSalles(idCinema: number) {
    this.cinemaService.chercherSallesCinema(idCinema)
    .subscribe (data =>{
      this.salles = data;
      this.idCinema = 0;
    })
  }

} // fin classe


