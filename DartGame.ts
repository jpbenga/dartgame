import { GAME_DIMENSIONS } from "./Constants";
import { MathUtils } from "./MathUtils";
import { Target } from "./Target";
import { Coordonees, Score } from "./Types";

export class DartGame{
    private target: Target;

    constructor(){
        this.target = new Target(1, 5, 10);
    }

    throwDart(): Coordonees{
        return{
            x: MathUtils.generateRandomNumber(GAME_DIMENSIONS.MIN_X, GAME_DIMENSIONS.MAX_X),
            y: MathUtils.generateRandomNumber(GAME_DIMENSIONS.MIN_X, GAME_DIMENSIONS.MAX_X)
        }
    }

    getScore(coordonnees: Coordonees): Score{
        return this.target.getScore(coordonnees);
    }

    playRound(): {throw: Coordonees; score: Score}{
        const throwResult = this.throwDart();
        const score = this.getScore(throwResult);
        return {throw: throwResult, score}
    }
}