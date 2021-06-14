export class GameObject {
<<<<<<< HEAD
=======
    constructor() {
        this.scale = 1;
    }
>>>>>>> 588e08e931447ecc28c0cc6b98ff6e2d0f98c4e1
    update() {
        this.posX += this.speedX;
        this.posY += this.speedY;
        this.element.style.transform = `matrix(${this.scale}, 0 , 0, ${this.scale}, ${this.posX}, ${this.posY})`;
    }
    spawn(tagName) {
        this.element = document.createElement(tagName);
        let level = document.querySelector("level");
        level.appendChild(this.element);
    }
    getRectancle() {
        return this.element.getBoundingClientRect();
    }
    getFutureRectangle() {
        return this.element.getBoundingClientRect();
    }
    reset(tagName) {
        this.spawn(tagName);
    }
}
//# sourceMappingURL=gameObject.js.map