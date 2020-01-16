import { Salle } from 'src/app/models/salle.model';
import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/app/service/salle.service';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemaService } from 'src/app/service/cinema.service';
import { Projection } from 'src/app/models/projection.model';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  // Récupère la salle saisie
  salle: Salle = {
    id: 0,
    name: '',
    nombrePlaces: 0,
    cinema: new Cinema(),
    projectionFilms: new Array<Projection>()
  }

  // Liste des cinemas
  cinemas

  // Liste des salles
  salles;

  // Variable de test
  test = 0;

  constructor(private salleService: SalleService, private cinemaService: CinemaService) { }

  ngOnInit() {
    this.getAllSalles();
    this.getAllCinemas()
    this.test = 0;
  }

  saveSalle() {
    this.salleService.addSalle(this.salle).subscribe(data => {
      this.salle = data;
      this.getAllSalles();
      this.getAllCinemas()
      this.salle.name = '';
      this.salle.nombrePlaces = 0;
      this.salle.cinema = new Cinema();
      this.salle.id = 0;
      this.test = 0;
    });
  }

  getAllSalles() {
    this.salleService.getAllSalles().subscribe(data => {
      this.salles = data;
      this.test = 0;
    });
  }

  updateSalle(id: number) {
    this.salleService.getSalleByid(id).subscribe(data => {
      this.salle = data;
      this.test = 1;
    });
  }

  deleteSalle(id: number) {
    this.salleService.deleteSalle(id).subscribe(data => {
    this.test = 0;
    });
  }

  getAllCinemas() {
    this.cinemaService.getAllCinemas().subscribe(data => {
      this.cinemas = data;
      this.test = 0;
    });
  }

}
