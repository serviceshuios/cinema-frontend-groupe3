import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/service/place.service';
import { Salle } from 'src/app/models/salle.model';
import { SalleService } from 'src/app/service/salle.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  place: Place = {
    id: 0,
    numero: 0,
    longitude: 0,
    latitude: 0,
    altitude: 0,
    salle: new Salle()
  }

  salles;

  test;

  places;

  constructor(private placeService: PlaceService, private salleService: SalleService) { }

  ngOnInit() {
    this.getAllPlaces();
    this.getAllSalles();
    this.test = 0;
  }


  public getAllPlaces() {
    this.placeService.getAllPlaces().subscribe( data => {
      this.places = data;
      this.test = 0;
    })
  }

    savePlace() {
    this.placeService.addPlace(this.place)
      .subscribe(data => {
        this.place = data
        this.place.numero = 0;
        this.place.id = 0;
        this.place.longitude = 0;
        this.place.latitude = 0;
        this.place.altitude = 0;
        this.place.salle = new Salle();
        this.getAllPlaces();
        this.getAllSalles();
        this.test = 0;
      });
  }

  updatePlace(id: number) {
    this.placeService.getPlace(id).subscribe(data => {
      this.place = data;
      this.test = 1;
    })
  }

  deletePlace(id: number) {
    this.placeService.deletePlace(id).subscribe(data => this.getAllPlaces());
    this.test = 0;
  }

  public getAllSalles(){
    this.salleService.getAllSalles().subscribe( data => {
      this.salles = data;
      this.test = 0;
    })
  }
}
