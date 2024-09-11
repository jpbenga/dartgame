import { DartGame } from './DartGame';
import { Coordonees } from './Types';
import { GAME_DIMENSIONS } from './Constants';

describe('DartGame', () => {
  let game: DartGame;

  beforeEach(() => {
    game = new DartGame();
  });

  test('throwDart should return coordinates within game dimensions', () => {
    const result = game.throwDart();
    expect(result.x).toBeGreaterThanOrEqual(GAME_DIMENSIONS.MIN_X);
    expect(result.x).toBeLessThanOrEqual(GAME_DIMENSIONS.MAX_X);
    expect(result.y).toBeGreaterThanOrEqual(GAME_DIMENSIONS.MIN_Y);
    expect(result.y).toBeLessThanOrEqual(GAME_DIMENSIONS.MAX_Y);
  });

  test('getScore should return correct scores for different positions', () => {
    const testCases: [Coordonees, number][] = [
      [{ x: 0, y: 0 }, 10],  // Centre de la cible
      [{ x: 0.5, y: 0.5 }, 10],  // Toujours dans le cercle intérieur
      [{ x: 3, y: 3 }, 5],  // Dans le cercle moyen
      [{ x: 7, y: 7 }, 1],  // Dans le cercle extérieur
      [{ x: 11, y: 11 }, 0],  // En dehors de la cible
    ];

    testCases.forEach(([coords, expectedScore]) => {
      expect(game.getScore(coords)).toBe(expectedScore);
    });
  });

  test('playRound should return valid throw and score', () => {
    const result = game.playRound();
    expect(result).toHaveProperty('throw');
    expect(result).toHaveProperty('score');
    expect([0, 1, 5, 10]).toContain(result.score);
  });
});