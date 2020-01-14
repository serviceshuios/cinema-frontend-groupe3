import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/service/place.service';

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
    altitude: 0

  }

  places;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }

  
  public getAllPlaces(){
    this.placeService.getAllPlaces().subscribe( data => {
      this.places = data;
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
        this.getAllPlaces();
      });
  }

  updatePlace(id: number) {
    this.placeService.getPlace(id).subscribe(data => {
      this.place = data;
    })
  }

  deletePlace(id: number) {
    this.placeService.deletePlace(id).subscribe(data => this.getAllPlaces());
  }
}
