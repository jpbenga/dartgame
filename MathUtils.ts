import { Coordonees } from "./Types";

export class MathUtils {
    static calculateDistance(point1: Coordonees, point2: Coordonees): number {
      return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
      );
    }
  
    static generateRandomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }