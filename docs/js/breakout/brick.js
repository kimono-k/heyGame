import { GameObject } from "./gameObject.js";
export class Brick extends GameObject {
    constructor(row, column, breakstatus = 2, color = "blue", itemtype = "default", item, hidden = false) {
        super();
        this.spawn();
    }
    update() {
    }
    spawn() {
    }
    reset() {
    }
    hit() {
    }
    break() {
    }
    checkItem() {
    }
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
}
//# sourceMappingURL=brick.js.map