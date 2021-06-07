export class FallingItem {
    // Parameters
    // Fields  
    private element : HTMLElement
    private item : string
    private posX : number
    private posY : number
    private speedX : number
    private speedY : number  


    // Properties

    // Constructor
    constructor() {

    }
    
    // Functions

    // gameloop
    public update() : void {

    }

    // general functions 
    public spawn() : void {

    }

    public reset() : void {

    }

    // fallingitem control
    public pickup() : void {

    }

    // collision
    public checkPaddleCollision() {

    }

    // global functions
    public getRectangle() : ClientRect {
        return this.element.getBoundingClientRect()
    }
    
    public getFutureRectangle() : ClientRect {
        // TODO: getFutureRectangle
        return this.element.getBoundingClientRect()
    }

}