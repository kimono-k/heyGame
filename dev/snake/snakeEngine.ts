import { Letter } from "./components/letter.js";
import { Segment } from "./components/segment.js";
import { Vector } from "./math/vector.js";
import { TouchManager } from "./touchManager.js";

export class SnakeEngine {
    private gameDiv: HTMLElement;
    private letterPos: Vector[];
    private snakeDivs: Segment[];
    private snakePos: Vector[];
    private toEat = false;
    private snakeDir: Vector = new Vector(0, 1);
    private moveTime = 0;
    private moveTimer = 0;
    public segmentSize = 10;
    public letterDivs: Letter[];
    public resMult: number;
    public delta = 1;
    public touch: TouchManager;
    public currentWord: string = 'Dani';

    constructor() {

    }
}
