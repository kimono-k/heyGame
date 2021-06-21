import { GameObject } from "./gameObject.js";
export class Brick extends GameObject {
    constructor(item) {
        super();
        this.breakstatus = false;
        this.item = item;
        this.spawn(item);
    }
    update() {
        super.update();
    }
    spawn(item) {
        console.log("brick spawn");
        this.element = document.createElement("brick");
        let brickgrid = document.querySelector("brickgrid");
        brickgrid.appendChild(this.element);
        this.element.innerHTML = item;
    }
    reset() {
    }
    hit() {
    }
    break() {
        this.element.classList.add("dead");
        this.element.innerHTML = "";
        this.breakstatus = true;
    }
    checkItem() {
    }
    getRectangle() {
        return this.element.getBoundingClientRect();
    }
}
//# sourceMappingURL=brick.js.map