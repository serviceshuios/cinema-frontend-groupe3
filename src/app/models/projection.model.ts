import { Film } from './film.model';
import { Salle } from './salle.model';
import { Seance } from './seance.model';
import { Ticket } from './ticket.model';


export class Projection {
public id: number;
public dateProjection: Date;
public prix: number;
public salle: Salle;
public film: Film;
public seance: Seance;
public tickets: Array<Ticket>;
}
