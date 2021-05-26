import { Game } from "./game";
import { BaseNode } from "./includes/baseNode";
import { DivNode } from "./includes/graphics/DivNode";
import { Vector } from "./includes/vector";
export class SnakeEngine extends Game {
    constructor(gameDiv) {
        super(gameDiv);
        this.size = new Vector(16, 9);
        this.segmentSize = new Vector(60, 60);
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));
        this.root = new BaseNode();
        this.addSnakeSegment(new Vector(3, 3));
        this.addSnakeSegment(new Vector(4, 3));
        this.addSnakeSegment(new Vector(5, 3));
    }
    addSnakeSegment(pos) {
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
//# sourceMappingURL=snakeEngine.js.map