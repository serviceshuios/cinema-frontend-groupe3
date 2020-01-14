import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemaService } from 'src/app/service/cinema.service';

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
    nombreSalles: 0
  }

  // Liste des cinemas
  cinemas;

  // Variable de test
  test = 0;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.getAllCinema();
    this.test = 0;
  }

  saveCinema() {
    this.cinemaService.addCinema(this.cinema).subscribe(data => {
      this.cinema = data;
      this.getAllCinema();
      this.cinema.name = '';
      this.cinema.longitude = 0;
      this.cinema.latitude = 0;
      this.cinema.altitude = 0;
      this.cinema.id = 0;
      this.test = 0;
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

}
