import { Salle } from 'src/app/models/salle.model';
import { Component, OnInit } from '@angular/core';
import { SalleService } from 'src/app/service/salle.service';

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
    nombrePlaces: 0
  }

  // Liste des salles
  salles;

  // Variable de test
  test = 0;

  constructor(private salleService: SalleService) { }

  ngOnInit() {
    this.getAllSalle();
    this.test = 0;
  }

  saveSalle() {
    this.salleService.addSalle(this.salle).subscribe(data => {
      this.salle = data;
      this.getAllSalle();
      this.salle.name = '';
      this.salle.nombrePlaces = 0;
      this.salle.id = 0;
      this.test = 0;
    });
  }

  getAllSalle() {
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
    this.salleService.deleteCinema(id).subscribe(data => {
    this.getAllSalle();
    this.test = 0;
    });
  }

}
