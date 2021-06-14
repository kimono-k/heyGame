import { GameObject } from "./gameObject.js";
export class Paddle extends GameObject {
    constructor(gameInstance) {
        super();
        this.gameInstance = gameInstance;
        super.spawn("paddle");
        this.speedX = 0;
<<<<<<< HEAD
        this.posX = 300;
        this.posY = 500;
        this.scale = 1;
        this.gameInstance = gameInstance;
=======
        this.speedY = 0;
        this.posX = 300;
        this.posY = 500;
        this.scale = 1;
>>>>>>> 588e08e931447ecc28c0cc6b98ff6e2d0f98c4e1
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
    update() {
<<<<<<< HEAD
        super.update();
        this.checkBorderCollision();
=======
        if (!this.checkBorderCollision()) {
            super.update();
        }
>>>>>>> 588e08e931447ecc28c0cc6b98ff6e2d0f98c4e1
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
<<<<<<< HEAD
        console.log(this.posX);
        if (this.posX <= 0 || this.posX >= 550) {
            console.log("You touched the border");
            this.speedX = 0;
=======
        let rightBorder = this.gameInstance.levelWidth - this.element.clientWidth * this.scale;
        if (this.posX < 0 || this.posX > rightBorder) {
            this.posX = 300;
            return true;
        }
        else {
            return false;
>>>>>>> 588e08e931447ecc28c0cc6b98ff6e2d0f98c4e1
        }
    }
}
//# sourceMappingURL=paddle.js.map