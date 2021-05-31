import { Paddle } from "./paddle.js";
export class Level {
    constructor() {
        this.lives = 3;
        this.isGameOver = false;
        this.levelType = 1;
        this.level = 1;
        console.log("Level was created!");
        this.init(level);
        this.paddle = new Paddle;
    }
    update() {
    }
    init(level) {
    }
    reset() {
    }
    end() {
    }
    gameOver() {
    }
    finnish() {
    }
    changeLives(amount) {
    }
    changeScore(amount) {
    }
}
//# sourceMappingURL=level.js.map