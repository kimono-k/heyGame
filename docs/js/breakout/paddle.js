export class Paddle {
    constructor() {
        this.spawn();
    }
    spawn() {
        this.element = document.createElement("paddle");
        let background = document.querySelector("background");
        background.appendChild(this.element);
        console.log("Paddle was created");
    }
    update() {
    }
    reset() {
    }
    onKeyLeft() {
    }
    onKeyRight() {
    }
    checkBorderCollision() {
    }
    getRectancle() {
    }
    getFutureRectangle() {
    }
}
//# sourceMappingURL=paddle.js.map