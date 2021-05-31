import { Level } from "./level.js";
class Game {
    constructor() {
        this.levelType = 1;
        this.levelNumber = 1;
        console.log("Game was created!");
        this.startLevel(1);
        this.gameLoop();
    }
    gameLoop() {
        this.level.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    startLevel(level) {
        this.level = new Level(1);
    }
    checkCollision(a, b) {
    }
    changeglobalScore(amount) {

    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=game.js.map