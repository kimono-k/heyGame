import { GameObject } from "./gameObject.js";
export class Paddle extends GameObject {
    constructor() {
        super();
        super.spawn("paddle");
        super.speedX = 0;
        super.posX = 300;
        super.posY = 500;
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
    update() {
        super.update();
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
}
//# sourceMappingURL=paddle.js.map