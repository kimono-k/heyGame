import { SnakeEngine } from "./snakeEngine.js";

export interface BaseLevel {
    engine: SnakeEngine;
    start: () => void;
    onEat: (letter: string) => void;
}

export class LevelBeginner implements BaseLevel {
    public engine: SnakeEngine;
    public possibleLetters = "ABDEFGIJKLMNOPRSTUVZ"

    public start() {
        let newLetter = this.possibleLetters[
            Math.floor(Math.random() * this.possibleLetters.length)];
        this.engine.generateLetter(newLetter);
    }

    public onEat() {
        let newLetter = this.possibleLetters[
            Math.floor(Math.random() * this.possibleLetters.length)];
        this.engine.generateLetter(newLetter);
        this.engine.grow();
    }
}
