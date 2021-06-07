export class Ball {
    constructor(gameInstance) {
        this.posX = 500;
        this.posY = 100;
        this.speedX = 1;
        this.speedY = -1;
        this.sticky = false;
        this.scale = 0.3;
        this.gameInstance = gameInstance;
        this.spawn();
    }
    update() {
        this.posX += this.speedX;
        this.posY += this.speedY;
        this.element.style.transform = `matrix(${this.scale}, 0 , 0, ${this.scale}, ${this.posX}, ${this.posY})`;
        this.checkBorderCollision();
    }
    spawn() {
        this.element = document.createElement("ball");
        let level = document.querySelector("level");
        level.appendChild(this.element);
        console.log("spawn ball");
    }
    reset() {
        this.spawn();
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
    checkPaddleCollision() {
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
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
    getFutureRectangle() {
        return this.element.getBoundingClientRect();
    }
}
//# sourceMappingURL=ball.js.map