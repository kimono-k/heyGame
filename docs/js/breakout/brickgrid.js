import { Brick } from "./brick.js";
export class BrickGrid {
    constructor(brickAmount) {
        this.bricks = [];
        this.spawn();
        this.brickAmount = brickAmount;
        this.items = ["", "b", "o", "s", "", "b", "o", "o", "t", "", "", "b", "o", "o", "s", "d", "o", "o", "s", "", "b", "o", "t", "e", "n"];
        console.log("BrickGrid constructor", brickAmount);
        for (let i = 0; i < this.brickAmount; i++) {
            this.bricks.push(new Brick(this.items[i]));
        }
    }
    update() {
        for (let brick of this.bricks) {
            brick.update();
        }
    }
    spawn() {
        this.element = document.createElement("brickgrid");
        let level = document.querySelector("level");
        level.appendChild(this.element);
    }
    reset() {
    }
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
}
//# sourceMappingURL=brickgrid.js.map