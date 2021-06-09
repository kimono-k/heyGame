import { GameComponent } from "./gameComponent.js";
export class Letter extends GameComponent {
    constructor(letter) {
        super('p', ['gameLetter']);
        this.letter = letter;
    }
    eat() {
        let i = this.engine.letterDivs.indexOf(this);
    }
}
//# sourceMappingURL=letter.js.map