import { Vector } from "../math/vector.js";
export class GameComponent {
    constructor(tag = 'div', classes = []) {
        this.position = new Vector(0, 0);
        this.div = document.createElement(tag);
        for (let c of classes)
            this.div.classList.add(c);
        this.div.classList.add('gameComp');
    }
    start() {
    }
    update() {
        this.updateDiv();
    }
    updateDiv() {
        let globalPos = this.position.multiply(this.engine.resMult);
        this.div.style.left = `${globalPos.x}px`;
        this.div.style.top = `${globalPos.y}px`;
        let globalSize = this.size.multiply(this.engine.resMult);
        this.div.style.width = `${globalSize.x}px`;
        this.div.style.height = `${globalSize.y}px`;
    }
}
//# sourceMappingURL=gameComponent.js.map