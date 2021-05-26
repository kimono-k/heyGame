import { Game } from "./game";
import { BaseNode } from "./includes/baseNode";
import { DivNode } from "./includes/graphics/DivNode";
import { Vector } from "./includes/vector";
import { Letter } from "./letter";

export class SnakeEngine extends Game {
    size = new Vector(16, 9);
    map: string[][];
    letters: Letter[];
    snakePos: Vector[];
    snakeTarget: Vector[];
    snakeDivs: DivNode[];
    segmentSize = new Vector(60, 60);

    constructor(gameDiv: HTMLElement) {
        super(gameDiv);
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));

        this.root = new BaseNode();
        this.addSnakeSegment(new Vector(3, 3));
        this.addSnakeSegment(new Vector(4, 3));
        this.addSnakeSegment(new Vector(5, 3));
    }

    addSnakeSegment(pos: Vector) {
        let snake = new DivNode(pos, this.segmentSize, 'snakeSegment');
        this.root.addChild(snake);
    }

    updateSnakePos() {
        for (let i = 0; i < this.snakePos.length; i++) {
            let pos = this.snakePos[i];
            let div = this.snakeDivs[i];
            div.pos = pos;
        }
    }

    get h() {
        return this.size.x;
    }

    get w() {
        return this.size.y;
    }
}
