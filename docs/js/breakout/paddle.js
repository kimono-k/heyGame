export class Paddle {
    constructor() {
        this.posX = clientWidth / 2;
        this.posY = clientHeight - 10;
        this.speedX = 0;
        this.inputLeft = 65;
        this.inputRight = 68;
        this.spawn();
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
    update() {
        this.posX += this.speedX;
        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
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
    checkBorderCollision(a, b) {
        game.checkCollision(a, b);
    }
    getRectancle() {
        return this.element.getBoundingClientRect();
    }
    getFutureRectangle() {
    }
}
//# sourceMappingURL=paddle.js.map