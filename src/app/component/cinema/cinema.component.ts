import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemaService } from 'src/app/service/cinema.service';
import { Ville } from 'src/app/models/ville.model';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

   // Récupère le cinema saisie
  cinema: Cinema = {
    id: 0,
    name: '',
    longitude: 0,
    latitude: 0,
    altitude: 0,
    nombreSalles: 0,
    ville: new Ville(),
  }

  // Liste des cinemas
  cinemas;
  villes;

  // Variable de test
  test = 0;

  constructor(private cinemaService: CinemaService, private villeService: VilleService) { }

  ngOnInit() {
    this.getAllCinema();
    this.getAllVilles();
    this.test = 0;
  }

  saveCinema() {
    this.cinemaService.addCinema(this.cinema).subscribe(data => {
      this.cinema = data;
      this.cinema.name = '';
      this.cinema.longitude = 0;
      this.cinema.latitude = 0;
      this.cinema.altitude = 0;
      this.cinema.id = 0;
      this.test = 0;
      this.cinema.ville = new Ville()
      this.getAllCinema();
      this.getAllVilles();
    });
  }

  getAllCinema() {
    this.cinemaService.getAllCinemas().subscribe(data => {
      this.cinemas = data;
      this.test = 0;
    });
  }

  updateCinema(id: number) {
    this.cinemaService.getCinema(id).subscribe(data => {
      this.cinema = data;
      this.test = 1;
    });
  }

  deleteCinema(id: number) {
    this.cinemaService.deleteCinema(id).subscribe(data => {
    this.getAllCinema();
    this.test = 0;
    });
  }

  getAllVilles() {
      this.villeService.getAllVilles()
      .subscribe (data => {
        this.villes = data;
      });
    } // getAll
  

}
