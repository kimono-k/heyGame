import { GameObject } from "./gameObject.js";
export class Paddle extends GameObject {
    constructor(gameInstance) {
        super();
        super.spawn("paddle");
        this.speedX = 0;
        this.posX = 300;
        this.posY = 500;
        this.scale = 1;
        this.gameInstance = gameInstance;
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
    update() {
        super.update();
        this.checkBorderCollision();
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
        console.log(this.posX);
        if (this.posX <= 0 || this.posX >= 550) {
            console.log("You touched the border");
            this.speedX = 0;
        }
    }
}
//# sourceMappingURL=paddle.js.map