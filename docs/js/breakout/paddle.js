export class Paddle {
    constructor() {
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
        let level = document.querySelector("level");
        level.appendChild(this.element);
        console.log("Paddle was created");
        this.posX = 300;
        this.posY = 500;
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
        return this.element.getBoundingClientRect();
    }
}
//# sourceMappingURL=paddle.js.map