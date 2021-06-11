export class RandomLetters {
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
export class LearnLetters {
    constructor() {
        this.letters = 'BOMRS';
        this.currentLetter = 0;
        this.currentProgress = 0;
    }
    start() {
        this.engine.generateLetter(this.letter);
        this.engine.fullText = `${this.letter}${this.letter}${this.letter}`;
        this.engine.progressText = '';
    }
    onEat() {
        this.engine.progressText += this.letter;
        this.currentProgress++;
        if (this.currentProgress == 3) {
            this.currentLetter++;
            this.engine.grow();
            if (this.currentLetter >= this.letters.length) {
                this.engine.level = new LearnWords();
                this.engine.level.start();
                return;
            }
            this.start();
            this.currentProgress = 0;
        }
        else {
            this.engine.generateLetter(this.letter);
        }
    }
    get letter() {
        return this.letters[this.currentLetter];
    }
}
export class LearnWords {
    constructor() {
        this.words = ['boom', 'boor', 'boos', 'luchtvaartmaatschappij', 'roos'];
        this.currentWord = 0;
        this.wordProgress = 0;
    }
    spawnWord() {
        for (let i = 0; i < this.word.length; i++) {
            this.engine.generateLetter(this.word[i]);
        }
        this.engine.fullText = this.word;
        this.engine.progressText = '';
        this.wordProgress = 0;
    }
    start() {
        this.spawnWord();
    }
    onEat(letter) {
        if (letter == this.word[this.wordProgress]) {
            this.wordProgress++;
            this.engine.progressText = this.word.substring(0, this.wordProgress);
            if (this.engine.progressText == this.word) {
                this.currentWord++;
                this.spawnWord();
            }
        }
        else {
            this.engine.die();
        }
    }
    get word() {
        return this.words[this.currentWord];
    }
}
//# sourceMappingURL=level.js.map