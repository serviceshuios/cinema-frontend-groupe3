import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  //récupére le categorie saisie
  categorie: Categorie = {
    id: 0 ,
    name: ''
  }

  // liste des categories
  categories;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  saveCategorie() {
    this.categorieService.addCategorie(this.categorie)
    .subscribe(data => {
      this.categorie = data
      this.categorie.id = 0;
      this.categorie.name = '';
      this.getAllCategories();
    })
  } // fin save 

    getAllCategories() {
      this.categorieService.getAllCategories()
      .subscribe (data => {
        this.categories = data
      })
    } // getAll 

    detailCategorie(id: number) {
      this.categorieService.getCategorie(id)
      .subscribe (data => {
        this.categorie = data;
      })
    } // fin detail

    deleteCategorie (id: number) {
      this.categorieService.deleteCategorie(id)
      .subscribe (data =>{
        this.getAllCategories();
      })
    } // fin delete


} // fin classe
