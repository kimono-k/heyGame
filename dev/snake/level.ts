import { SnakeEngine } from "./snakeEngine.js";

export interface BaseLevel {
    engine: SnakeEngine;
    start: () => void;
    onEat: (letter: string) => void;
}

export class RandomLetters implements BaseLevel {
    public engine: SnakeEngine;
    public possibleLetters = "ABDEFGIJKLMNOPRSTUVZ";

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

export class LearnLetters implements BaseLevel {
    public engine: SnakeEngine;
    private letters = 'BOMRS';
    private currentLetter = 0;
    private currentProgress = 0;

    public start() {
        this.engine.generateLetter(this.letter);
        this.engine.fullText = `${this.letter}${this.letter}${this.letter}`;
        this.engine.progressText = '';
    }

    public onEat() {
        this.engine.audio.playAudio(this.letter.toLowerCase());
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
        } else {
            this.engine.generateLetter(this.letter);
        }
    }

    get letter() {
        return this.letters[this.currentLetter];
    }
}

export class LearnWords implements BaseLevel {
    public engine: SnakeEngine;
    private words = ['roos','boon','boos','luchtvaartmaatschappij','roos'];
    private currentWord = 0;
    private wordProgress = 0;

    public spawnWord() {
        for (let i = 0; i < this.word.length; i++) {
            this.engine.generateLetter(this.word[i]);
        }
        this.engine.fullText = this.word;
        this.engine.progressText = '';
        this.wordProgress = 0;
    }

    public start() {
        this.spawnWord();
    }

    public onEat(letter: string) {
        this.engine.audio.playAudio(letter);
        if (letter == this.word[this.wordProgress]) {
            this.wordProgress++;
            this.engine.progressText = this.word.substring(0, this.wordProgress);
            if (this.engine.progressText == this.word) {
                this.engine.playWord(this.word);
                this.currentWord++;
                this.engine.grow();
                this.spawnWord();
            }
        } else {
            this.engine.die();
        }
    }

    get word() {
        return this.words[this.currentWord];
    }
}
