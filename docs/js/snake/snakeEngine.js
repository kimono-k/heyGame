import { Game } from "./game";
import { Vector } from "./includes/vector";
export class SnakeEngine extends Game {
    constructor(gameDiv) {
        super(gameDiv);
        this.size = new Vector(16, 9);
        this.segmentSize = new Vector(60, 60);
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));
    }
    get h() {
        return this.size.x;
    }
    get w() {
        return this.size.y;
    }
}
//# sourceMappingURL=snakeEngine.js.map