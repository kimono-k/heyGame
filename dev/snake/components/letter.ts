import { GameComponent } from "./gameComponent.js";

export class Letter extends GameComponent {
    public letter: string;

    constructor(letter: string) {
        super('p', ['gameLetter']);
        this.letter = letter;
    }

    public eat() {
        let i = this.engine.letterDivs.indexOf(this);

    }
}