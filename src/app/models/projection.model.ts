import { Film } from './film.model';
import { Salle } from './salle.model';


export class Projection {
public id: number;
public dateProjection: Date;
public prix: number;
public salle: Salle
public film: Film
}
