import { Salle } from './salle.model';

export class Place {
	public id: number;
	public numero: number;
	public longitude: number;
	public latitude: number;
	public altitude: number;
	public salle: Salle;
}