import { Paddle } from "./paddle.js";
class Game {
    constructor() {
        console.log("Game was created!");
        this.paddle = new Paddle;
        this.gameLoop();
    }
    gameLoop() {
        this.paddle.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map