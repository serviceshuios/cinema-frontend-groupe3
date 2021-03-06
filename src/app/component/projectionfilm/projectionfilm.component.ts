
import { Component, OnInit } from '@angular/core';
import { Projection } from 'src/app/models/projection.model'
import { ProjectionService } from 'src/app/service/projection.service';
import { Film } from 'src/app/models/film.model';
import { Salle } from 'src/app/models/salle.model';
import { SalleService } from 'src/app/service/salle.service';
import { FilmService } from 'src/app/service/film.service';
import { Categorie } from 'src/app/models/categorie.model';
import { Seance } from 'src/app/models/seance.model';
import { SeanceService } from 'src/app/service/seance.service';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-projectionfilm',
  templateUrl: './projectionfilm.component.html',
  styleUrls: ['./projectionfilm.component.css']
})
export class ProjectionfilmComponent implements OnInit {

  projection: Projection = {
    id: 0,
    dateProjection: null,
    prix: 0,
    film: new Film(),
    salle: new Salle(),
    seance: new Seance(),
    tickets: new Array<Ticket>()
  }

  films;

  salles;

  seances;

  projections;

  // Variable de test
  test = 0;

  constructor(private projectionService: ProjectionService, private salleService: SalleService,
      private filmService: FilmService, private seanceService: SeanceService) { }

  ngOnInit() {
    this.getAllProjections();
    this.getAllFilms();
    this.getAllSalles();
    this.getAllSeances();
    this.test = 0;
  }

  public getAllProjections() {
    this.projectionService.getAllProjections().subscribe(data => {
      this.projections = data;
      this.test = 0;
    })
  }

  saveProjection() {
    this.projectionService.addProjection(this.projection)
      .subscribe(data => {
        this.projection = data;
        this.projection.id = 0;
        this.projection.dateProjection = null;
        this.projection.prix = 0;
        this.test = 0;
        this.projection.film = new Film();
        this.projection.salle = new Salle();
        this.projection.seance = new Seance();
        this.getAllProjections();
        this.getAllFilms();
        this.getAllSalles();
        this.getAllSeances();
      });
  }

  updateProjection(id: number) {
    this.projectionService.getProjection(id).subscribe(data => {
      this.projection = data;
      this.test = 1;
    })
  }

  deleteProjection(id: number) {
    this.projectionService.deleteProjection(id).subscribe(data =>
    this.getAllProjections());
    this.test = 0;
  }

  getAllFilms() {
      this.filmService.getAllFilms()
      .subscribe (data => {
        this.films = data;
      });
  } // getAll

  getAllSalles() {
      this.salleService.getAllSalles()
      .subscribe (data => {
        this.salles = data;
      });
  } // getAll

  getAllSeances() {
      this.seanceService.getAllSeances()
      .subscribe (data => {
        this.seances = data;
      });
  } // getAll

}
