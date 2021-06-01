import { Paddle } from "./paddle.js";
export class Level {
    constructor(level) {
        this.lives = 3;
        this.isGameOver = false;
        this.levelType = 1;
        this.level = 1;
        console.log("Level was created!");
        this.init(level);
    }
    update() {
        this.paddle.update();
    }
    init(level) {
        this.paddle = new Paddle;
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