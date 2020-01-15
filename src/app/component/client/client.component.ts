import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/models/ville.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private ville) { }

  ngOnInit() {
  }

  chercherCinemas(ville: Ville){

  }
}
