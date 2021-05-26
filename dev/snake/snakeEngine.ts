import { Game } from "./game";
import { Vector } from "./includes/vector";
import { Letter } from "./letter";

export class SnakeEngine extends Game {
    size = new Vector(16, 9);
    map: string[][];
    letters: Letter[];
    snakePos: Vector[];
    segmentSize = new Vector(60, 60);

    constructor(gameDiv: HTMLElement) {
        super(gameDiv);
        this.map = new Array(this.h).fill(new Array(this.w).fill('0'));
    }

    get h() {
        return this.size.x;
    }

    get w() {
        return this.size.y;
    }
}
