import { DivNode } from "./includes/graphics/DivNode.js";
import { Vector } from "./includes/vector.js";
export class Letter extends DivNode {
    constructor(text = 'a') {
        super(new Vector(0, 0), new Vector(0, 0), 'p', ['gameLetter']);
        this.div.innerHTML = text;
    }
}
//# sourceMappingURL=letter.js.map