import { GameObject } from "./gameObject.js";
export class Paddle extends GameObject {
    constructor(gameInstance) {
        super();
        this.gameInstance = gameInstance;
        super.spawn("paddle");
        this.speedX = 0;
        this.speedY = 0;
        this.posX = 300;
        this.posY = 500;
        this.scale = 1;
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
    update() {
        if (!this.checkBorderCollision()) {
            super.update();
        }
    }
    onKeyDown(e) {
        switch (e.key) {
            case "a":
            case "ArrowLeft":
                this.speedX = -5;
                break;
            case "d":
            case "ArrowRight":
                this.speedX = 5;
                break;
        }
    }
    onKeyUp(e) {
        switch (e.key) {
            case "a":
            case "d":
            case "ArrowLeft":
            case "ArrowRight":
                this.speedX = 0;
                break;
        }
    }
    checkBorderCollision() {
        let rightBorder = this.gameInstance.levelWidth - this.element.clientWidth * this.scale;
        if (this.posX > rightBorder) {
            this.posX = rightBorder;
        }
        if (this.posX < 0) {
            this.posX = 0;
        }
    }
}
//# sourceMappingURL=paddle.js.map