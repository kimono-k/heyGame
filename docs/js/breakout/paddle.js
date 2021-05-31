export class Paddle {
    constructor() {
        this.posX = clientWidth / 2;
        this.posY = clientHeight - 10;
        this.inputLeft = 65;
        this.inputRight = 68;
        this.spawn();
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
    update() {
    }
    spawn() {
        this.element = document.createElement("paddle");
        let background = document.querySelector("background");
        background.appendChild(this.element);
        console.log("Paddle was created");
        this.posX = 500;
        this.posY = 600;
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
        return this.element.getBoundingClientRect();
    }
    getFutureRectangle() {
    }
}
//# sourceMappingURL=paddle.js.map