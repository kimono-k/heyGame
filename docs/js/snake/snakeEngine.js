import { Game } from "./game.js";
import { BaseNode } from "./includes/baseNode.js";
import { DivNode } from "./includes/graphics/DivNode.js";
import { Vector } from "./includes/vector.js";
import { Letter } from "./letter.js";
export class SnakeEngine extends Game {
    constructor(gameDiv) {
        super(gameDiv);
        this.size = new Vector(12, 8);
        this.segmentSize = new Vector(10, 10);
        this.snakeDir = new Vector(1, 0);
        this.map = [];
        this.letters = [];
        this.letterPos = [];
        this.snakePos = [];
        this.snakeTarget = [];
        this.snakeDivs = [];
        this.toEat = false;
        this.moveTime = 0.4;
        this.moveTimer = 0;
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));
        let root = new BaseNode();
        root.addChild(this.createSnakeSegment(new Vector(3, 3)));
        root.addChild(this.createSnakeSegment(new Vector(4, 3)));
        root.addChild(this.createSnakeSegment(new Vector(5, 3)));
        root.addChild(this.createSnakeSegment(new Vector(6, 3)));
        this.rootNode = root;
        let mult = Math.min(window.innerWidth / 120, window.innerHeight / 80);
        this.pxMult = new Vector(mult, mult);
        this.generateLetter('d');
        this.touch.connect('swiped', this, this.swipeHandler);
        this.connect('update', this, this.snakeUpdate);
        this.calcTarget(this);
    }
    swipeHandler(self, data) {
        let touchDiff = data['swipe'];
        let touchX = (Math.abs(touchDiff.x) > Math.abs(touchDiff.y))
            ? Math.sign(touchDiff.x) : 0;
        let touchY = (Math.abs(touchDiff.x) < Math.abs(touchDiff.y))
            ? Math.sign(touchDiff.y) : 0;
        if ((self.snakeDir.x === 0) === (touchY === 0)) {
            self.snakeDir = new Vector(touchX, touchY);
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
        this.rootNode.addChild(letter);
        letter.game = this;
        letter.div.style.fontSize = `${this.segmentSize.x * this.pxMult.x * 0.66}px`;
        letter.pos = randomPos.add(new Vector(0.25, -0.5)).multiply(this.segmentSize);
        this.letters.push(letter);
    }
    createSnakeSegment(pos, unshift = false) {
        let snake = new DivNode(pos.multiply(this.segmentSize), this.segmentSize, 'snakeSegment');
        if (unshift) {
            this.snakeDivs.unshift(snake);
            this.snakePos.unshift(pos);
        }
        else {
            this.snakeDivs.push(snake);
            this.snakePos.push(pos);
        }
        return snake;
    }
    updateSnakePos(self, offset = 0) {
        for (let i = 0; i < self.snakePos.length; i++) {
            let pos = self.snakePos[i].lerp(self.snakeTarget[i], offset);
            let div = self.snakeDivs[i];
            div.pos = pos.multiply(self.segmentSize);
        }
    }
    copyPos(self) {
        let pos = [];
        for (let v of self.snakePos) {
            pos.push(new Vector(v.x, v.y));
        }
        return pos;
    }
    calcTarget(self) {
        let targetPos = self.copyPos(self);
        targetPos.splice(0, 1);
        let lastSegment = targetPos[targetPos.length - 1];
        targetPos.push(lastSegment.add(self.snakeDir));
        self.snakeTarget = targetPos;
    }
    moveSnake() {
        this.snakePos = this.snakeTarget;
        if (this.toEat) {
            let segment = this.createSnakeSegment(this.snakePos[0], true);
            this.rootNode.addChild(segment);
            segment.game = this;
            this.toEat = false;
        }
        this.calcTarget(this);
    }
    eatLetter(i) {
        let letter = this.letters[i];
        console.log(letter);
        letter.div.remove();
        this.letterPos.splice(i, 1);
        this.letters.splice(i, 1);
        letter.disconnect();
        console.log(i);
    }
    snakeUpdate(self) {
        self.moveTimer += self.delta * 20 / 1000 * Math.pow(self.moveTime, -1);
        if (self.moveTimer >= 1) {
            let snakeHead = self.snakeTarget[self.snakeTarget.length - 1];
            for (let i = 0; i < self.letterPos.length; i++) {
                let l = self.letterPos[i];
                if (l.x === snakeHead.x && l.y === snakeHead.y) {
                    self.toEat = true;
                    self.eatLetter(i);
                    self.generateLetter();
                }
            }
            self.moveSnake();
            self.moveTimer = 0;
            console.log('moved a square!');
        }
        self.updateSnakePos(self, self.moveTimer);
    }
    get w() {
        return this.size.x;
    }
    get h() {
        return this.size.y;
    }
}
//# sourceMappingURL=snakeEngine.js.map