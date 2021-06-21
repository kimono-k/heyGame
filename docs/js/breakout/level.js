import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import { BrickGrid } from "./brickgrid.js";
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
        this.brickGrid.update();
        this.paddle.update();
        this.checkBallPaddleCollision();
        this.checkBrickCollision();
    }
    init(level) {
        this.paddle = new Paddle(this.gameInstance);
        this.ball = new Ball(this.gameInstance);
        this.brickGrid = new BrickGrid(25);
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
    checkBrickCollision() {
        for (let i = 0; i < this.brickGrid.brickAmount; i++) {
            let hit = this.gameInstance.checkCollision(this.ball.getRectancle(), this.brickGrid.bricks[i].getRectancle());
            if (hit && !this.brickGrid.bricks[i].breakstatus) {
                console.log("brick collision", i);
                this.ball.bounceY();
                this.brickGrid.bricks[i].break();
                hit = false;
            }
        }
    }
}
//# sourceMappingURL=level.js.map