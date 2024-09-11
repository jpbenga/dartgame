import { Scoreable, Cercle } from "./Interfaces";
import { MathUtils } from "./MathUtils";
import { Coordonees, Score } from "./Types";


export class Target implements Scoreable{
    private innerCercle: Cercle;
    private middleCercle: Cercle;
    private outerCercle: Cercle;

    constructor(innerRadius: number, middleRadius: number, outerRadius: number){
        const centre: Coordonees = {x: 0, y: 0}
        this.innerCercle = {centre, rayon: innerRadius};
        this.middleCercle = {centre, rayon: middleRadius};
        this.outerCercle = {centre, rayon: outerRadius}
    }

    getScore(coordonnees: Coordonees): Score {
        const distance = MathUtils.calculateDistance(coordonnees, this.outerCercle.centre);
        
        if (distance <= this.innerCercle.rayon) return 10;
        if (distance <= this.middleCercle.rayon) return 5;
        if (distance <= this.outerCercle.rayon) return 1;
        return 0;
    }
}