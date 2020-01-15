
import { Component, OnInit } from '@angular/core';
import { Projection } from 'src/app/models/projection.model'
import { ProjectionService } from 'src/app/service/projection.service';
import { SalleFilmId } from 'src/app/models/sallefilmid.model';
import { Film } from 'src/app/models/film.model';
import { Salle } from 'src/app/models/salle.model';
import { SalleService } from 'src/app/service/salle.service';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-projectionfilm',
  templateUrl: './projectionfilm.component.html',
  styleUrls: ['./projectionfilm.component.css']
})
export class ProjectionfilmComponent implements OnInit {

  titreFilm: "";

  nameSalle: "";

  projection: Projection = {
    id: 0,
    dateProjection: null,
    prix: 0,
    film: null,
    salle: null,
  }

  projections;

  // Variable de test
  test = 0;

  constructor(private projectionService: ProjectionService, private salleService: SalleService,private filmService: FilmService) { }

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
    this.salleService.getSalleByName(this.nameSalle).subscribe(data =>{
      this.projection.salle = data;
      this.nameSalle= "";
    })

    this.filmService.getFilmbyTitre(this.titreFilm).subscribe(data => {
      this.projection.film= data;
      this.titreFilm= "";
    });

    this.projectionService.addProjection(this.projection)
      .subscribe(data => {
        this.projection = data;
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
