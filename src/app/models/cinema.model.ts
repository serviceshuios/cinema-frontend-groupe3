import { Ville } from './ville.model';

export class Cinema {
    public id: number;
    public name: string;
    public longitude: number;
    public latitude: number;
    public altitude: number;
    public nombreSalles: number;
    public ville: Ville;
}