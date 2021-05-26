import { Game } from "./game.js";
import { BaseNode } from "./includes/baseNode.js";
import { DivNode } from "./includes/graphics/DivNode.js";
import { Vector } from "./includes/vector.js";
export class SnakeEngine extends Game {
    constructor(gameDiv) {
        super(gameDiv);
        this.size = new Vector(16, 9);
        this.segmentSize = new Vector(60, 60);
        this.map = [];
        this.letters = [];
        this.snakePos = [];
        this.snakeTarget = [];
        this.snakeDivs = [];
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));
        let root = new BaseNode();
        root.addChild(this.createSnakeSegment(new Vector(3, 3)));
        root.addChild(this.createSnakeSegment(new Vector(4, 3)));
        root.addChild(this.createSnakeSegment(new Vector(5, 3)));
        this.rootNode = root;
        this.connect('update', this, this.updateSnakePos);
    }
    createSnakeSegment(pos) {
        let snake = new DivNode(pos.multiply(this.segmentSize), this.segmentSize, 'snakeSegment');
        this.snakeDivs.push(snake);
        return snake;
    }
    updateSnakePos(self) {
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
//# sourceMappingURL=snakeEngine.js.map