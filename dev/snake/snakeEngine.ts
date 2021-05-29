import { Game } from "./game.js";
import { BaseNode } from "./includes/baseNode.js";
import { DivNode } from "./includes/graphics/DivNode.js";
import { Vector } from "./includes/vector.js";
import { Letter } from "./letter.js";

export class SnakeEngine extends Game {
    size = new Vector(16, 9);
    segmentSize = new Vector(60, 60);

    snakeDir = new Vector(1, 0);

    map: string[][] = [];
    letters: Letter[] = [];
    snakePos: Vector[] = [];
    snakeTarget: Vector[] = [];
    snakeDivs: DivNode[] = [];

    moveTime = 1;
    moveTimer = 0;

    constructor(gameDiv: HTMLElement) {
        super(gameDiv);
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));

        let root = new BaseNode();

        root.addChild(this.createSnakeSegment(new Vector(3, 3)));
        root.addChild(this.createSnakeSegment(new Vector(4, 3)));
        root.addChild(this.createSnakeSegment(new Vector(5, 3)));

        this.rootNode = root;

        this.connect('update', this, this.snakeUpdate);
        this.calcTarget(this);
    }

    createSnakeSegment(pos: Vector) {
        let snake = new DivNode(pos.multiply(this.segmentSize),
            this.segmentSize, 'snakeSegment');
        this.snakeDivs.push(snake);
        this.snakePos.push(pos);
        return snake;
    }

    updateSnakePos(self: SnakeEngine, offset = 0) {
        for (let i = 0; i < self.snakePos.length; i++) {
            let pos = self.snakePos[i].lerp(self.snakeTarget[i], offset);
            let div = self.snakeDivs[i];
            div.pos = pos.multiply(self.segmentSize);
        }
    }

    copyPos(self: SnakeEngine) {
        let pos: Vector[] = [];
        for (let v of self.snakePos) {
            pos.push(new Vector(v.x, v.y));
        }
        return pos;
    }

    calcTarget(self: SnakeEngine) {
        let targetPos = self.copyPos(self);
        targetPos.splice(0, 1);
        let lastHead = targetPos[targetPos.length - 1];
        targetPos.push(lastHead.add(self.snakeDir));
        self.snakeTarget = targetPos;
    }

    moveSnake(self: SnakeEngine) {
        self.snakePos = self.snakeTarget;
        self.calcTarget(self);
        // let lastHead = self.snakePos[self.snakePos.length - 1];
        // self.snakePos.push(lastHead.add(self.snakeDir));
    }

    snakeUpdate(self: SnakeEngine) {
        self.moveTimer += self.delta * 20 / 1000 * Math.pow(self.moveTime, -1);
        if (self.moveTimer >= 1) {
            self.moveSnake(self);
            self.moveTimer = 0;
            console.log('moved a square!')
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
