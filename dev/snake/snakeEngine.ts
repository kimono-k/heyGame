import { Game } from "./game.js";
import { BaseNode } from "./includes/baseNode.js";
import { DivNode } from "./includes/graphics/DivNode.js";
import { Vector } from "./includes/vector.js";
import { Letter } from "./letter.js";

export class SnakeEngine extends Game {
    size = new Vector(16, 9);
    segmentSize = new Vector(60, 60);

    map: string[][] = [];
    letters: Letter[] = [];
    snakePos: Vector[] = [];
    snakeTarget: Vector[] = [];
    snakeDivs: DivNode[] = [];

    constructor(gameDiv: HTMLElement) {
        super(gameDiv);
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));

        let root = new BaseNode();
        
        root.addChild(this.createSnakeSegment(new Vector(3, 3)));
        root.addChild(this.createSnakeSegment(new Vector(4, 3)));
        root.addChild(this.createSnakeSegment(new Vector(5, 3)));

        this.rootNode = root;

        this.connect('update', this, this.updateSnakePos);
    }

    createSnakeSegment(pos: Vector) {
        let snake = new DivNode(pos.multiply(this.segmentSize),
            this.segmentSize, 'snakeSegment');
        this.snakeDivs.push(snake);
        return snake;
    }

    updateSnakePos(self: SnakeEngine) {
        for (let i = 0; i < self.snakePos.length; i++) {
            let pos = self.snakePos[i];
            let div = self.snakeDivs[i];
            div.pos = pos.multiply(self.segmentSize);
        }
    }

    get h() {
        return this.size.x;
    }

    get w() {
        return this.size.y;
    }
}
