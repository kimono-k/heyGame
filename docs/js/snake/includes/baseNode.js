import { NodeEventGenerator } from "./global/nodeEventGenerator.js";
import { Vector } from "./vector.js";
export class BaseNode extends NodeEventGenerator {
    constructor(tag = 'div', classes = []) {
        super();
        this.children = [];
        this.delta = 0;
        this.customUpdate = () => { };
        this.customReady = () => { };
        this.div = document.createElement(tag);
        for (let c of classes)
            this.div.classList.add(c);
        this.div.classList.add('gameComp');
    }
    addChild(child) {
        child.parent = this;
        this.children.push(child);
        this.refreshChildren();
    }
    disconnect() {
        this.parent.children.splice(this.parent.children.indexOf(this), 1);
        this.parent = undefined;
    }
    start() {
        this.div = this.engine.updateEl(new Vector(0, 0), new Vector(0, 0), this.div);
        for (let child of this.children) {
            child.start();
        }
        this.trigger('start');
        this.customReady(this);
    }
    loop(delta) {
        this.delta = delta;
        for (let child of this.children) {
            child.loop(delta);
        }
        this.trigger('loop');
        this.customUpdate(this, delta);
        this.updateElement();
    }
    refreshChildren() {
        this.div.innerHTML = '';
        for (let child of this.children) {
            this.div.appendChild(child.element);
        }
    }
    updateElement() { }
    get element() {
        return this.div;
    }
    set game(engine) {
        this.engine = engine;
        for (let child of this.children) {
            child.game = engine;
        }
        this.input = engine.input;
        this.touch = engine.touch;
    }
    set ready(ready) {
        this.customReady = ready;
    }
    set update(update) {
        this.customUpdate = update;
    }
}
//# sourceMappingURL=baseNode.js.map