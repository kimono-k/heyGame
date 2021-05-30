import { Game } from "./game.js";
import { BaseNode } from "./includes/baseNode.js";
import { DivNode } from "./includes/graphics/DivNode.js";
import { Vector } from "./includes/vector.js";
import { Letter } from "./letter.js";

export class SnakeEngine extends Game {
    size = new Vector(12, 8);
    segmentSize = new Vector(60, 60);

    snakeDir = new Vector(1, 0);

    map: string[][] = [];
    letters: Letter[] = [];
    letterPos: Vector[] = [];
    snakePos: Vector[] = [];
    snakeTarget: Vector[] = [];
    snakeDivs: DivNode[] = [];
    toMove = false;

    moveTime = 0.7;
    moveTimer = 0;

    constructor(gameDiv: HTMLElement) {
        super(gameDiv);
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));

        let root = new BaseNode();

        root.addChild(this.createSnakeSegment(new Vector(3, 3)));
        root.addChild(this.createSnakeSegment(new Vector(4, 3)));
        root.addChild(this.createSnakeSegment(new Vector(5, 3)));
        root.addChild(this.createSnakeSegment(new Vector(6, 3)));

        this.rootNode = root;

        this.generateLetter('d');

        this.touch.connect('swiped', this, this.swipeHandler);

        this.connect('update', this, this.snakeUpdate);
        this.calcTarget(this);
    }

    // swipes are 'rounded' to 4 directions
    swipeHandler(self: SnakeEngine, data: Object) {
        let touchDiff = data['swipe'];
        let touchX = (Math.abs(touchDiff.x) > Math.abs(touchDiff.y))
        ? Math.sign(touchDiff.x) : 0;
        let touchY = (Math.abs(touchDiff.x) < Math.abs(touchDiff.y))
        ? Math.sign(touchDiff.y) : 0;

        // snake shouldn't turn fully around
        if ((self.snakeDir.x === 0) === (touchY === 0)) {
            self.snakeDir = new Vector(touchX, touchY);
        }
    }

    isOccupied(pos: Vector) {
        for (let v of this.snakePos) {
            if (v.x === pos.x && v.y === pos.y) return true;
        }
        for (let v of this.letterPos) {
            if (v.x === pos.x && v.y === pos.y) return true;
        }
        return false;
    }

    generateLetter(text = 'a') {
        let genPos = () => {return new Vector(Math.floor(Math.random() * this.w),
            Math.floor(Math.random() * this.h))};
        let randomPos = genPos();
        while (this.isOccupied(randomPos)) {
            randomPos = genPos();
        }
        this.letterPos.push(randomPos);
        let letter = new Letter(text);
        this.rootNode.addChild(letter);
        letter.game = this;
        letter.div.style.fontSize = `${this.segmentSize.x * 0.66}px`;
        letter.pos = randomPos.multiply(this.segmentSize);
        this.letters.push(letter);
    }

    // aside from creation, also adds it to relevant arrays
    createSnakeSegment(pos: Vector) {
        let snake = new DivNode(pos.multiply(this.segmentSize),
            this.segmentSize, 'snakeSegment');
        this.snakeDivs.push(snake);
        this.snakePos.push(pos);
        return snake;
    }

    // doesn't move the snake, only updates position of graphical elements
    updateSnakePos(self: SnakeEngine, offset = 0) {
        for (let i = 0; i < self.snakePos.length; i++) {
            let pos = self.snakePos[i].lerp(self.snakeTarget[i], offset);
            let div = self.snakeDivs[i];
            div.pos = pos.multiply(self.segmentSize);
        }
    }

    // deep copy
    copyPos(self: SnakeEngine) {
        let pos: Vector[] = [];
        for (let v of self.snakePos) {
            pos.push(new Vector(v.x, v.y));
        }
        return pos;
    }

    // calculates where to move and stores it in snakeTarget
    calcTarget(self: SnakeEngine) {
        let targetPos = self.copyPos(self);
        if (this.toMove) {
            this.toMove = false;
            let segment = this.createSnakeSegment(new Vector(0, 0))
            this.root.addChild(segment);
            segment.game = this;
        }
        else targetPos.splice(0, 1);
        let lastSegment = targetPos[targetPos.length - 1];
        targetPos.push(lastSegment.add(self.snakeDir));
        self.snakeTarget = targetPos;
    }

    moveSnake() {
        this.snakePos = this.snakeTarget;
        this.calcTarget(this);
    }

    eatLetter(i: number) {
        console.log(i);
    }

    snakeUpdate(self: SnakeEngine) {
        self.moveTimer += self.delta * 20 / 1000 * Math.pow(self.moveTime, -1);
        if (self.moveTimer >= 1) { // done every {self.moveTime} seconds
            let snakeHead = self.snakePos[self.snakePos.length - 1];
            for (let i = 0; i < self.letterPos.length; i++) {
                let l = self.letterPos[i];
                if (l.x === snakeHead.x && l.y === snakeHead.y) {
                    self.toMove = true;
                    self.eatLetter(i);
                }
            }
            self.moveSnake();
            self.moveTimer = 0;
            console.log('moved a square!');
        }
        self.updateSnakePos(self, self.moveTimer);
    }

    get h() {
        return this.size.x;
    }

    get w() {
        return this.size.y;
    }
}
