export class Paddle {
    constructor() {
        this.posX = clientWidth / 2;
        this.posY = clientHeight - 10;
        this.inputLeft = 65;
        this.inputRight = 68;
        this.spawn();
    }
    update() {
    }
    spawn() {
        this.element = document.createElement("paddle");
        let background = document.querySelector("background");
        background.appendChild(this.element);
        console.log("Paddle was created");
    }
    reset() {
    }
    onKeyUp() {
    }
    onKeyDown() {
    }
    checkBorderCollision() {
    }
    getRectancle() {
    }
    getFutureRectangle() {
    }
}
//# sourceMappingURL=paddle.js.map