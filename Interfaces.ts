import { Coordonees, Score } from "./Types";

export interface Cercle{
    centre: Coordonees;
    rayon: number;
}

export interface Scoreable{
    getScore(coordonnees: Coordonees): Score;
}