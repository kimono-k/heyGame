import { Vector } from "../oldsnake/includes/vector.js";
;
export class TouchManager {
    constructor() {
        this.activeTracking = false;
        this.swipeTreshold = 7;
        this.justTapped = false;
        this.justSwiped = false;
        this.justMoved = false;
    }
    onTouchEventDown(e) {
        this.onTouchDown(e.changedTouches[0]);
    }
    onTouchDown(e) {
        if (!this.activeTracking) {
            this.downTouch = e;
            this.trackId = e.identifier;
            this.activeTracking = true;
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
    }
    update() {
        this.justTapped = false;
        this.justSwiped = false;
        this.justMoved = false;
    }
}
//# sourceMappingURL=touchManager.js.map