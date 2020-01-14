import { Component, OnInit } from '@angular/core';
import { Projection } from 'src/app/models/projection.model'
import { ProjectionService } from 'src/app/service/projection.service';
import { SalleFilmId } from 'src/app/models/sallefilmid.model';
import { Film } from 'src/app/models/film.model';
import { Salle } from 'src/app/models/salle.model';

@Component({
  selector: 'app-projectionfilm',
  templateUrl: './projectionfilm.component.html',
  styleUrls: ['./projectionfilm.component.css']
})
export class ProjectionfilmComponent implements OnInit {

  film: Film = {
    id: 0,
    titre: "",
    duree: 0,
    description: "",
    photo: "",
    dateSortie: null
  }

  salle: Salle = {
    id: 0,
    name: "",
    nombrePlaces: 0,
  }

  id: SalleFilmId = {
    film: this.film,
    salle: this.salle,
  }

  projection: Projection = {
    id: this.id,
    dateProjection: null,
    prix: 0,

  }

  projections;

  // Variable de test
  test = 0;

  constructor(private projectionService: ProjectionService) { }

  ngOnInit() {
    this.getAllProjections();
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
        this.projection = data
        this.projection.id = null;
        this.projection.dateProjection = null;
        this.projection.prix = 0;
        this.test = 0;
        this.getAllProjections();
      });
  }

  updateProjection(idFilm: number, idSalle: number) {
    this.projectionService.getProjection(idFilm, idSalle).subscribe(data => {
      this.projection = data;
      this.test = 1;
    })
  }

  deleteProjection(id: number) {
    this.projectionService.deleteProjection(id).subscribe(data => this.getAllProjections());
    this.test = 0;
  }

}
