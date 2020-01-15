import { Categorie } from './categorie.model';

export class Film {
	public id: number;
	public titre: string;
	public duree: number;
	public realisateur: String;
	public description: string;
	public photo: string;
	public dateSortie: Date;
	public categorie: Categorie;
}