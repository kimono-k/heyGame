import { Level } from "./level.js";
class Game {
    constructor() {
        this.levelType = 1;
        this.levelNumber = 1;
        console.log("Game was created!");
        this.startLevel(level);
        this.gameLoop();
    }
    gameLoop() {
        this.level.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    startLevel(level) {
        this.level = new Level();
    }
    checkCollision(a, b) {
    }
    changeglobalScore(amount) {
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=game.js.map