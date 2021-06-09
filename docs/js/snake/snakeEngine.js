import { Letter } from "./components/letter.js";
import { Segment } from "./components/segment.js";
import { Vector } from "./math/vector.js";
import { TouchManager } from "./touchManager.js";
export class SnakeEngine {
    constructor(gameDiv) {
        this.letterPos = [];
        this.snakeDivs = [];
        this.snakePos = [];
        this.snakeTarget = [];
        this.toEat = false;
        this.snakeDir = new Vector(1, 0);
        this.moveTime = 0.5;
        this.moveTimer = 0;
        this.size = new Vector(12, 8);
        this.segmentSize = 10;
        this.letters = [];
        this.delta = 1;
        this.deltaTimestamp = 1;
        this.currentWord = 'Dani';
        this.gameDiv = gameDiv;
        this.initInput();
        this.createSnakeSegment(new Vector(3, 3));
        this.createSnakeSegment(new Vector(4, 3));
        this.createSnakeSegment(new Vector(5, 3));
        this.createSnakeSegment(new Vector(6, 3));
        let screen = gameDiv.getBoundingClientRect();
        let mult = Math.min(screen.width / 120, screen.height / 80);
        this.resMult = mult;
        this.calcTarget();
        this.touch.initListeners();
        this.generateLetter('d');
        console.log('game constructed!');
    }
    update(ms) {
        this.delta = (ms - this.deltaTimestamp) / 1000 * 60;
        this.deltaTimestamp = ms;
        this.snakeUpdate();
        this.render();
        this.touch.update();
        window.requestAnimationFrame((ms) => this.update(ms));
    }
    render() {
        for (let c of this.letters) {
            c.update();
        }
        for (let c of this.snakeDivs) {
            c.update();
        }
    }
    fakeTouchEvent(e) {
        return {
            identifier: -1,
            target: e.target,
            pageX: e.pageX,
            pageY: e.pageY
        };
    }
    swipeHandler(touchDiff) {
        let touchX = (Math.abs(touchDiff.x) > Math.abs(touchDiff.y))
            ? Math.sign(touchDiff.x) : 0;
        let touchY = (Math.abs(touchDiff.x) < Math.abs(touchDiff.y))
            ? Math.sign(touchDiff.y) : 0;
        if ((this.snakeDir.x === 0) === (touchY === 0)) {
            this.snakeDir = new Vector(touchX, touchY);
        }
    }
    isOccupied(pos) {
        for (let v of this.snakePos) {
            if (v.x === pos.x && v.y === pos.y)
                return true;
        }
        for (let v of this.letterPos) {
            if (v.x === pos.x && v.y === pos.y)
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
    }
    moveSnake() {
        this.snakePos = this.snakeTarget;
        if (this.toEat) {
            let segment = this.createSnakeSegment(this.snakePos[0], true);
            segment.engine = this;
            this.toEat = false;
        }
        this.calcTarget();
    }
    eatLetter(i) {
        let letter = this.letters[i];
        letter.div.remove();
        this.letterPos.splice(i, 1);
        this.letters.splice(i, 1);
        letter.eat();
    }
    snakeUpdate() {
        this.moveTimer += this.delta * 20 / 1000 * Math.pow(this.moveTime, -1);
        if (this.touch.justSwiped) {
            this.swipeHandler(this.touch.lastSwipe);
        }
        if (this.moveTimer >= 1) {
            let snakeHead = this.snakeTarget[this.snakeTarget.length - 1];
            for (let i = 0; i < this.letterPos.length; i++) {
                let l = this.letterPos[i];
                if (l.x === snakeHead.x && l.y === snakeHead.y) {
                    this.toEat = true;
                    this.eatLetter(i);
                    this.generateLetter();
                }
            }
            this.moveSnake();
            this.moveTimer = 0;
            console.log('moved a square!');
        }
        this.updateSnakePos(this.moveTimer);
    }
    initInput() {
        let touch = new TouchManager;
        touch.engine = this;
        this.touch = touch;
    }
    start() {
        this.render();
        window.requestAnimationFrame((ms) => this.update(ms));
    }
    get w() {
        return this.size.x;
    }
    get h() {
        return this.size.y;
    }
}
//# sourceMappingURL=snakeEngine.js.map