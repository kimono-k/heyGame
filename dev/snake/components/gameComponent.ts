import { Vector } from "../math/vector.js";
import { SnakeEngine } from "../snakeEngine.js";
import { TouchManager } from "../touchManager.js";

export class GameComponent {
    protected touch: TouchManager;
    protected engine: SnakeEngine;
    public div: HTMLElement;
    public position: Vector;
    public size: Vector;

    constructor(tag = 'div', classes: string[] = []) {
        this.div = document.createElement(tag);
        for (let c of classes) this.div.classList.add(c);
        this.div.classList.add('gameComp');
    }

    public start() {

    }

    public update() {
        this.updateDiv();
    }

    public updateDiv() {
        let globalPos = this.position.multiply(this.engine.resMult);
        this.div.style.left = `${globalPos.x}px`;
        this.div.style.top = `${globalPos.y}px`;
        let globalSize = this.size.multiply(this.engine.resMult);
        this.div.style.width = `${globalSize.x}px`;
        this.div.style.height = `${globalSize.y}px`;
    }
}