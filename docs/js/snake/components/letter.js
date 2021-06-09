import { GameComponent } from "./gameComponent.js";
export class Letter extends GameComponent {
    constructor(letter) {
        super('p', ['gameLetter']);
        this.letter = letter;
        this.div.innerText = letter;
    }
    eat() {
        let i = this.engine.letters.indexOf(this);
        this.engine.letters.splice(i, 1);
    }
}
//# sourceMappingURL=letter.js.map