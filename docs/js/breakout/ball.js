import { GameObject } from "./gameObject.js";
export class Ball extends GameObject {
    constructor(gameInstance) {
        super();
        this.sticky = false;
        this.gameInstance = gameInstance;
        super.spawn("ball");
        super.posX = 500;
        super.posY = 100;
        super.speedY = 1;
        super.speedX = 1;
    }
    update() {
        super.update();
        this.checkBorderCollision();
    }
    checkBorderCollision() {
        let rightBorder = this.gameInstance.levelWidth - this.element.clientWidth * this.scale * 2.2;
        let bottemBorder = this.gameInstance.levelHeight - this.element.clientHeight * this.scale * 2.2;
        console.log(this.element.clientWidth * this.scale);
        if (this.posY > bottemBorder || this.posY < 0 - this.element.clientWidth * this.scale * 1.2) {
            this.bounceY();
        }
        if (this.posX < 0 - this.element.clientWidth * this.scale * 1.2 || this.posX > rightBorder) {
            this.bounceX();
        }
    }
    paddleCollisionHandler() {
        this.bounceY();
    }
    checkBrickCollision() {
    }
    bounceX() {
        this.speedX *= -1;
    }
    bounceY() {
        this.speedY *= -1;
    }
    toggleStick() {
    }
}
//# sourceMappingURL=ball.js.map