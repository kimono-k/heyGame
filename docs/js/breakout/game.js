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
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    changeglobalScore(amount) {
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=game.js.map