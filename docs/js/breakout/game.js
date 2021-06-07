import { Level } from "./level.js";
class Game {
    constructor() {
        this.levelType = 1;
        this.levelNumber = 1;
        console.log("Game was created!");
        this.element = document.querySelector("game");
        this.startLevel(1);
        this.gameLoop();
    }
    gameLoop() {
        this.level.update();
        this.updateLevelSize();
        requestAnimationFrame(() => this.gameLoop());
    }
    startLevel(level) {
        this.updateLevelSize;
        this.level = new Level(1, this);
        console.log("level started");
    }
    updateLevelSize() {
        this.levelWidth = this.element.clientWidth;
        this.levelHeight = this.element.clientHeight;
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