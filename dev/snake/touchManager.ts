import { Vector } from "../oldsnake/includes/vector.js";
import { SnakeEngine } from "../oldsnake/snakeEngine.js";

interface Touch {
    identifier: number;
    target: EventTarget;
    pageX: number;
    pageY: number;
};

export class TouchManager {
    private engine: SnakeEngine;
    // id of touch that's being followed (-1 if mouse)
    private trackId: number;
    private activeTracking: boolean = false;
    private swipeTreshold: number = 7;
    // can be used to get position, target of last press
    public downTouch: Touch;
    // true if a tap was detected this frame (same for swipe/move)
    public justTapped: boolean = false;
    public justSwiped: boolean = false;
    public justMoved: boolean = false;
    // position of last tap/movement, direction of last swipe
    public lastTap: Vector;
    public lastSwipe: Vector;
    public lastMove: Vector;

    constructor() { }

    public onTouchEventDown(e: TouchEvent) {
        this.onTouchDown(e.changedTouches[0]);
    }

    // only triggers if no other touch is currently being tracked
    public onTouchDown(e: Touch) {
        if (!this.activeTracking) {
            this.downTouch = e;
            this.trackId = e.identifier;
            this.activeTracking = true;
        }
    }

    public onTouchEventUp(e: TouchEvent) {
        e.preventDefault();
        for (let t of e.changedTouches) {
            if (t.identifier === this.trackId) {
                this.onTouchUp(t);
            }
        }
    }

    // only triggers if touch has the same id as the one being kept track of
    public onTouchUp(e: Touch) {
        let vDown = new Vector(this.downTouch.pageX, this.downTouch.pageY).multiply(this.engine.pxMult.pow(-1));
        let vUp = new Vector(e.pageX, e.pageY).multiply(this.engine.pxMult.pow(-1));

        this.lastTap = vUp.multiply(this.engine.pxMult.pow(-1));

        let touchDiff = vUp.subtract(vDown);

        if (touchDiff.length > this.swipeTreshold) {
            this.lastSwipe = touchDiff;
            this.justSwiped = true;
        }

        this.justTapped = true;
        this.activeTracking = false;
    }

    public onTouchEventMove(e: TouchEvent) {
        e.preventDefault();
        for (let t of e.changedTouches) {
            if (t.identifier == this.trackId) {
                this.onTouchMove(t);
            }
        }
    }

    // tracks any form of movement from the tracked touch
    public onTouchMove(e: Touch) {
        this.lastMove = new Vector(e.pageX, e.pageY).multiply(this.engine.pxMult.pow(-1));
    }

    public update() {
        this.justTapped = false;
        this.justSwiped = false;
        this.justMoved = false;
    }
}