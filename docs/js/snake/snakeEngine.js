import { Vector } from "./math/vector.js";
export class SnakeEngine {
    constructor() {
        this.toEat = false;
        this.snakeDir = new Vector(0, 1);
        this.moveTime = 0;
        this.moveTimer = 0;
        this.segmentSize = 10;
        this.delta = 1;
        this.currentWord = 'Dani';
    }
}
//# sourceMappingURL=snakeEngine.js.map