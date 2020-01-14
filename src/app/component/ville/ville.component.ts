import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/models/ville.model';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  ville: Ville = {
    id: 0,
    name: "",
    longitude: 0,
    latitude: 0,
    altitude: 0
  }

  villes;

  constructor(private villeService: VilleService) { }

  ngOnInit() {
    this.getAllVilles();
  }

  public getAllVilles(){
    this.villeService.getAllVilles().subscribe( data => {
      this.villes = data;
    })
  }

    saveVille() {
    this.villeService.addVille(this.ville)
      .subscribe(data => {
        this.ville = data
        this.ville.name = '';
        this.ville.id = 0;
        this.ville.longitude = 0;
        this.ville.latitude = 0;
        this.ville.altitude = 0;
        this.getAllVilles();
      });
  }

  updateVille(id: number) {
    this.villeService.getVille(id).subscribe(data => {
      this.ville = data;
    })
  }

  deleteVille(id: number) {
    this.villeService.deleteVille(id).subscribe(data => this.getAllVilles());
  }
}
