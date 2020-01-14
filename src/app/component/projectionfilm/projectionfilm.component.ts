import { Component, OnInit } from '@angular/core';
import { Projection } from 'src/app/models/projection.model'
import { ProjectionService } from 'src/app/service/projection.service';

@Component({
  selector: 'app-projectionfilm',
  templateUrl: './projectionfilm.component.html',
  styleUrls: ['./projectionfilm.component.css']
})
export class ProjectionfilmComponent implements OnInit {

  projection: Projection = {
    salleId: 0,
    filmId: 0,
    dateProjection: null,
    prix: 0,

  }

  projections;

  // Variable de test
  test = 0;

  constructor(private projectionService: ProjectionService) { }

  ngOnInit() {
  }
  
  public getAllProjections(){
    this.projectionService.getAllProjections().subscribe( data => {
      this.projections = data;
      this.test= 0;
    })
  }

    saveProjection() {
    this.projectionService.addProjection(this.projection)
      .subscribe(data => {
        this.projection = data
        this.projection.filmId = 0;
        this.projection.salleId = 0;
        this.projection.dateProjection = null;
        this.projection.prix = 0;
        this.test= 0;
        this.getAllProjections();
      });
  }

  updateProjection(idFilm: number, idSalle: number) {
    this.projectionService.getProjection(idFilm, idSalle).subscribe(data => {
      this.projection = data;
      this.test= 1;
    })
  }

  deleteProjection(id: number) {
    this.projectionService.deleteProjection(id).subscribe(data => this.getAllProjections());
    this.test= 0;
  }

}
