import { Vector } from "../../oldsnake/includes/vector.js";
import { GameComponent } from "./gameComponent.js";

export class Segment extends GameComponent {
    public mapPos: Vector;

    constructor() {
        super('snakeSegment');
    }

    public updatePos() {
        
    }
}
