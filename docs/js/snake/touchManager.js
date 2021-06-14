import { Vector } from "./math/vector.js";
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
        let vDown = new Vector(this.downTouch.pageX, this.downTouch.pageY).divide(this.engine.resMult);
        let vUp = new Vector(e.pageX, e.pageY).divide(this.engine.resMult);
        this.lastTap = vUp;
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
    initListeners(div = document) {
        div.addEventListener('touchstart', (e) => { this.onTouchDown(e.changedTouches[0]); }, false);
        div.addEventListener('touchend', (e) => { this.onTouchEventUp(e); }, false);
        div.addEventListener('touchmove', (e) => { this.onTouchEventMove(e); }, false);
        div.addEventListener('mousedown', (e) => { this.onTouchDown(this.engine.fakeTouchEvent(e)); }, false);
        div.addEventListener('mouseup', (e) => { this.onTouchUp(this.engine.fakeTouchEvent(e)); }, false);
        div.addEventListener('mousemove', (e) => { this.onTouchMove(this.engine.fakeTouchEvent(e)); }, false);
    }
    onTouchMove(e) {
        this.lastMove = new Vector(e.pageX, e.pageY).divide(this.engine.resMult);
    }
    update() {
        this.justTapped = false;
        this.justSwiped = false;
        this.justMoved = false;
    }
}
//# sourceMappingURL=touchManager.js.map