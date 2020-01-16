import { Component, OnInit } from '@angular/core';
import { VilleService } from 'src/app/service/ville.service';
import { Cinema } from 'src/app/models/cinema.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  nomVille: "";
  idVille = 0;

  cinemas: Array<Cinema> = [];

  villes;

  constructor(private villeService: VilleService) { }

  ngOnInit() {
    this.getAllVilles();
  }

  getAllVilles(){
    this.villeService.getAllVilles().subscribe(data =>{
      this.villes = data;
    });
  }

  chercherCinemas(nomVille: string) {
    this.villeService.getVillebyName(nomVille).subscribe(data => {
      this.idVille = data.id;
      this.villeService.chercherCinemasVille(this.idVille).subscribe(data2 => {
        this.cinemas = data2;
        this.nomVille = "";
        this.idVille = 0;
      })

    }
    )
  }
}


