import { Component, OnInit } from '@angular/core';
import { Seance } from 'src/app/models/seance.model';
import { SeanceService } from 'src/app/service/seance.service';
import { Projection } from 'src/app/models/projection.model';
import { ProjectionService } from 'src/app/service/projection.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  // Récupère le cinema saisie
  seance: Seance = {
    id: 0,
    heureDebut: null,
    projectionFilm: new Projection()
  }

  projection;

  projections;

  // Liste des cinemas
  seances;

  // Variable de test
  test = 0;

  constructor(private seanceService: SeanceService, private projectionService: ProjectionService) { }

  ngOnInit() {
    this.getAllSeance();
    this.test = 0;
  }

  saveSeance() {
    this.seanceService.addSeance(this.seance).subscribe(data => {
      this.seance = data;
      this.getAllSeance();
      this.seance.heureDebut = null;
      this.seance.id = 0;
      this.test = 0;
    });
  }

  getAllSeance() {
    this.seanceService.getAllSeances().subscribe(data => {
      this.seances = data;
      this.seances.forEach(seance => {
        this.seanceService.getSeanceProjection(seance.id).subscribe(data2 => {
          seance.projectionFilm = data2;
        })
      });
      this.test = 0;
    });
  }

  getProjection(id: number) {
    this.seanceService.getSeanceProjection(id).subscribe(data => {
      this.projection = data;
      this.test = 0;
    })
  }

  updateSeance(id: number) {
    this.seanceService.getSeance(id).subscribe(data => {
      this.seance = data;
      this.test = 1;
    });
  }

  deleteSeance(id: number) {
    this.seanceService.deleteSeance(id).subscribe(data => {
      this.getAllSeance();
      this.test = 0;
    });
  }
}