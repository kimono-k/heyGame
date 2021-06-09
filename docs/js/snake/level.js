export class LevelBeginner {
    constructor() {
        this.possibleLetters = "ABDEFGIJKLMNOPRSTUVZ";
    }
    start() {
        let newLetter = this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)];
        this.engine.generateLetter(newLetter);
    }
    onEat() {
        let newLetter = this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)];
        this.engine.generateLetter(newLetter);
        this.engine.grow();
    }
}
//# sourceMappingURL=level.js.map