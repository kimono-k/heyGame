import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
export class Level {
    constructor(level, gameInstance) {
        this.lives = 3;
        this.isGameOver = false;
        this.levelType = 1;
        this.level = 1;
        this.gameInstance = gameInstance;
        console.log("Level was created!");
        this.init(level);
    }
    update() {
        this.ball.update();
        this.paddle.update();
        this.checkBallPaddleCollision();
    }
    init(level) {
        this.paddle = new Paddle;
        this.ball = new Ball(this.gameInstance);
    }
    reset() {
    }
    end() {
    }
    gameOver() {
    }
    finish() {
    }
    changeLives(amount) {
    }
    changeScore(amount) {
    }
    checkBallPaddleCollision() {
        let hit = this.gameInstance.checkCollision(this.ball.getRectancle(), this.paddle.getRectancle());
        if (hit) {
            this.ball.bounceY();
        }
    }
}
//# sourceMappingURL=level.js.map