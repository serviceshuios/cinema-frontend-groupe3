import { Place } from './place.model';
import { Projection } from './projection.model';

export class Ticket {
    public id: number;
	public nomClient: string;
	public prix: number;
	public codePayement: number;
	public reservee: boolean;
	public place: Place;
	public projection: Projection;
} // fin classe