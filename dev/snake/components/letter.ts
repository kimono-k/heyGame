import { Vector } from "../math/vector.js";
import { GameComponent } from "./gameComponent.js";

export class Letter extends GameComponent {
    public letter: string;

    constructor(letter: string) {
        super('p', ['gameLetter']);
        this.letter = letter;
        this.div.innerText = letter;
    }

    public eat() {
        let i = this.engine.letters.indexOf(this);
        this.engine.letters.splice(i, 1);
        this.engine.letterPos.splice(i, 1);
    }
}
