import { Letter } from "./components/letter.js";
import { Segment } from "./components/segment.js";
import { Vector } from "./math/vector.js";
import { SoundManager } from "./soundManager.js";
import { TouchManager } from "./touchManager.js";
export class SnakeEngine {
    constructor(gameDiv, inputType = 'swipe') {
        this.snakeDivs = [];
        this.snakePos = [];
        this.snakeTarget = [];
        this.snakeDir = new Vector(1, 0);
        this.moveTime = 0.5;
        this.moveTimer = 0;
        this.visualOffset = 0;
        this.inputType = 'swipe';
        this.paused = false;
        this.toGrow = false;
        this.toDie = false;
        this.size = new Vector(12, 8);
        this.segmentSize = 10;
        this.letters = [];
        this.letterPos = [];
        this.delta = 1;
        this.deltaTimestamp = 1;
        this.currentWord = 'Dani';
        this.gameDiv = gameDiv;
        this.initInput();
        this.audio = new SoundManager();
        this.inputType = inputType;
        document.getElementById('restartButton').addEventListener('click', () => { this.start(); });
        let screen = gameDiv.getBoundingClientRect();
        let mult = Math.min(screen.width / 120, screen.height / 80);
        this.resMult = mult;
        this.touch.initListeners();
        this.touch.resMult = this.resMult;
        console.log('game constructed!');
    }
    pause() {
        this.paused = true;
        this.gameDiv.style.opacity = '0.25';
    }
    unPause() {
        this.paused = false;
        this.gameDiv.style.opacity = '1';
    }
    update(ms) {
        this.delta = (ms - this.deltaTimestamp) / 1000 * 60;
        this.deltaTimestamp = ms;
        this.snakeUpdate();
        if (this.paused)
            return;
        this.render();
        this.touch.update();
        if (!this.paused)
            window.requestAnimationFrame((ms) => this.update(ms));
    }
    playWord(word) {
        this.pause();
        setTimeout(() => this.vocalizeWord(word), 1000);
    }
    vocalizeWord(word) {
        this.audio.playAudio(word);
        setTimeout(() => {
            this.unPause();
            this.update(0);
        }, 1000);
    }
    render() {
        for (let c of this.letters) {
            c.update();
        }
        for (let c of this.snakeDivs) {
            c.update();
        }
    }
    movePos(touchPos) {
        let divRect = this.gameDiv.getBoundingClientRect();
        let touchOffset = new Vector(divRect.x, divRect.y);
        let headPos = this.snakeDivs[this.snakeDivs.length - 1].position.multiply(1);
        let touchDiff = touchPos.subtract(headPos).subtract(touchOffset.divide(this.resMult));
        this.moveDiff(touchDiff);
    }
    moveDiff(touchDiff) {
        let touchX = (Math.abs(touchDiff.x) > Math.abs(touchDiff.y))
            ? Math.sign(touchDiff.x) : 0;
        let touchY = (Math.abs(touchDiff.x) < Math.abs(touchDiff.y))
            ? Math.sign(touchDiff.y) : 0;
        this.moveDir(new Vector(touchX, touchY));
    }
    moveDir(touchDir) {
        if ((this.snakeDir.x === 0) === (touchDir.y === 0)) {
            this.snakeDir = new Vector(touchDir.x, touchDir.y);
        }
        if (this.moveTimer < 0.15) {
            this.calcTarget();
            this.visualOffset = this.moveTimer;
        }
    }
    isOccupied(pos) {
        for (let v of this.snakePos) {
            if (v.x === pos.x && v.y == pos.y)
                return true;
        }
        for (let v of this.letterPos) {
            if (v.x == pos.x && v.y == pos.y)
                return true;
        }
        return false;
    }
    generateLetter(text = 'a') {
        let genPos = () => {
            return new Vector(Math.floor(Math.random() * this.w), Math.floor(Math.random() * this.h));
        };
        let randomPos = genPos();
        while (this.isOccupied(randomPos)) {
            randomPos = genPos();
        }
        this.letterPos.push(randomPos);
        let letter = new Letter(text);
        letter.engine = this;
        letter.div.style.fontSize = `${this.segmentSize * this.resMult * 0.66}px`;
        letter.position = randomPos.add(new Vector(0.25, -0.5)).multiply(this.segmentSize);
        letter.size = new Vector(this.segmentSize, this.segmentSize);
        this.letters.push(letter);
        this.gameDiv.appendChild(letter.div);
    }
    createSnakeSegment(pos, unshift = false) {
        let snake = new Segment();
        snake.engine = this;
        snake.size = new Vector(this.segmentSize, this.segmentSize);
        if (unshift) {
            this.snakeDivs.unshift(snake);
            this.snakePos.unshift(pos);
        }
        else {
            this.snakeDivs.push(snake);
            this.snakePos.push(pos);
        }
        this.gameDiv.appendChild(snake.div);
        return snake;
    }
    updateSnakePos(offset = 0) {
        for (let i = 0; i < this.snakePos.length; i++) {
            let pos = this.snakePos[i].lerp(this.snakeTarget[i], offset);
            let div = this.snakeDivs[i];
            div.position = pos.multiply(this.segmentSize);
        }
    }
    copyPos() {
        let pos = [];
        for (let v of this.snakePos) {
            pos.push(new Vector(v.x, v.y));
        }
        return pos;
    }
    calcTarget() {
        let targetPos = this.copyPos();
        targetPos.splice(0, 1);
        let lastSegment = targetPos[targetPos.length - 1];
        targetPos.push(lastSegment.add(this.snakeDir));
        this.snakeTarget = targetPos;
        this.collideSnake();
    }
    collideSnake() {
        let snakeHead = this.snakeTarget[this.snakeTarget.length - 1];
        if (snakeHead.y < 0 || snakeHead.y >= this.h + 1 ||
            snakeHead.x < 0 || snakeHead.x >= this.w) {
            this.toDie = true;
        }
        for (let i = 0; i < this.snakeTarget.length - 1; i++) {
            let segment = this.snakeTarget[i];
            if (snakeHead.x == segment.x && snakeHead.y == segment.y) {
                this.toDie = true;
            }
        }
    }
    moveSnake() {
        this.snakePos = this.snakeTarget;
        if (this.toGrow) {
            let segment = this.createSnakeSegment(this.snakePos[0], true);
            segment.engine = this;
            this.toGrow = false;
        }
        this.visualOffset = 0;
        this.calcTarget();
    }
    eatLetter(i) {
        let letter = this.letters[i];
        letter.div.remove();
        letter.div.remove();
        letter.eat();
        this.algo.onEat(letter.letter);
    }
    grow() {
        this.toGrow = true;
    }
    snakeUpdate() {
        this.moveTimer += this.delta * 20 / 1000 * Math.pow(this.moveTime, -1);
        if (this.inputType === 'swipe' && this.touch.justSwiped) {
            this.moveDiff(this.touch.lastSwipe);
        }
        else if (this.inputType === 'tap' && this.touch.justTapped) {
            this.movePos(this.touch.lastTap);
        }
        if (this.moveTimer >= 0.15 && this.toDie) {
            this.die();
        }
        if (this.moveTimer >= 1) {
            let snakeHead = this.snakeTarget[this.snakeTarget.length - 1];
            for (let i = 0; i < this.letterPos.length; i++) {
                let l = this.letterPos[i];
                if (l.x === snakeHead.x && l.y === snakeHead.y) {
                    this.eatLetter(i);
                }
            }
            if (this.paused)
                return;
            this.moveSnake();
            this.moveTimer = 0;
            console.log('moved a square!');
        }
        let offset = (this.moveTimer - this.visualOffset) * (1 / (1 - this.visualOffset));
        this.updateSnakePos(offset);
    }
    die() {
        this.pause();
        document.getElementById('deathMenu').style.display = 'block';
    }
    initInput() {
        let touch = new TouchManager;
        touch.resMult = this.resMult;
        this.touch = touch;
    }
    clearDivs() {
        for (let d of this.letters) {
            d.div.remove();
        }
        for (let d of this.snakeDivs) {
            d.div.remove();
        }
        this.letters = [];
        this.letterPos = [];
        this.snakeDivs = [];
        this.snakePos = [];
    }
    start() {
        document.getElementById('deathMenu').style.display = 'none';
        this.clearDivs();
        this.render();
        this.algo.start();
        this.createSnakeSegment(new Vector(1, 4));
        this.createSnakeSegment(new Vector(2, 4));
        this.createSnakeSegment(new Vector(3, 4));
        this.createSnakeSegment(new Vector(4, 4));
        this.toGrow = false;
        this.toDie = false;
        this.snakeDir = new Vector(1, 0);
        this.calcTarget();
        this.unPause();
        window.requestAnimationFrame((ms) => this.update(ms));
    }
    set fullText(s) {
        document.getElementById('progressBG').innerText = s;
    }
    set progressText(s) {
        document.getElementById('progressBar').innerText = s;
    }
    get progressText() {
        return document.getElementById('progressBar').innerText;
    }
    set level(level) {
        this.algo = level;
        level.engine = this;
    }
    get level() {
        return this.algo;
    }
    get w() {
        return this.size.x;
    }
    get h() {
        return this.size.y;
    }
}
//# sourceMappingURL=snakeEngine.js.map