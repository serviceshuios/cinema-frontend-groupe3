import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/models/ville.model';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private villeService: VilleService) { }

  ngOnInit() {
  }

  chercherCinemas(nomVille: String){
    this.villeService.chercherCinemasVille(nomVille).subscribe(data =>{

    })
  }
}
