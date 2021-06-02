import { Vector } from "../vector.js";
import { NodeEventGenerator } from "./nodeEventGenerator.js";
;
export class TouchManager extends NodeEventGenerator {
    constructor(swipeTreshold = 10) {
        super();
        this.justTapped = false;
        this.justSwiped = false;
        this.justMoved = false;
        this.trackId = 0;
        this.activeTracking = false;
        this.swipeTreshold = 10;
        this.swipeTreshold = swipeTreshold;
    }
    onTouchEventDown(e) {
        e.preventDefault();
        this.onTouchDown(e.changedTouches[0]);
    }
    onTouchDown(e) {
        if (!this.activeTracking) {
            this.downEvent = e;
            this.trackId = e.identifier;
            this.activeTracking = true;
            this.trigger('touchDown', { 'touchEvent': e });
        }
    }
    onTouchEventUp(e) {
        e.preventDefault();
        for (let t of e.changedTouches) {
            if (t.identifier === this.trackId) {
                this.onTouchUp(t);
            }
        }
    }
    onTouchUp(e) {
        let vDown = new Vector(this.downEvent.pageX, this.downEvent.pageY).multiply(this.engine.pxMult.pow(-1));
        let vUp = new Vector(e.pageX, e.pageY).multiply(this.engine.pxMult.pow(-1));
        this.lastTap = vUp.multiply(this.engine.pxMult.pow(-1));
        let touchDiff = vUp.subtract(vDown);
        if (touchDiff.length > this.swipeTreshold) {
            this.lastSwipe = touchDiff;
            this.justSwiped = true;
        }
        this.justTapped = true;
        this.activeTracking = false;
        this.trigger('touchUp', { 'touchEvent': e });
    }
    onTouchEventMove(e) {
        e.preventDefault();
        for (let t of e.changedTouches) {
            if (t.identifier == this.trackId) {
                this.onTouchMove(t);
            }
        }
    }
    onTouchMove(e) {
        this.lastMove = new Vector(e.pageX, e.pageY).multiply(this.engine.pxMult.pow(-1));
        this.trigger('touchMove', { 'touchEvent': e });
    }
    update() {
        this.justTapped = false;
        this.justSwiped = false;
        this.justMoved = false;
    }
}
//# sourceMappingURL=touchManager.js.map