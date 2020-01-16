import { Cinema } from './cinema.model';
import { Projection } from './projection.model';

export class Salle {
public id: number;
public name: string;
public nombrePlaces: number;
public cinema: Cinema;
public projectionFilms: Array<Projection>;
}
