export class Paddle {
    // Parameters
    // Fields    
    private element : HTMLElement
    private posX : number = clientWidth / 2
    private posY : number = clientHeight - 10
    private speedX : number
    private inputLeft : number = 65
    private inputRight : number = 68

    // Properties

    // Constructor
    constructor(){
        this.spawn();
    }

    // Functions

    // gameloop
    public update() : void {

    }

    // general functions 
    public spawn(){
        this.element = document.createElement("paddle");
        let background = document.querySelector("background");
        background.appendChild(this.element);
        console.log("Paddle was created");

        //Create x and y values
        // this.posX = 100;
        // this.posY = 100;
    }

    public reset() : void {

    }

    // keybinds
    private onKeyUp(){

    }

    private onKeyDown(){

    }

    // collision
    public checkBorderCollision(){

    }

    // glabal funtions
    public getRectancle() : ClientRect {

    }

    public getFutureRectangle() : ClientRect {

    }

}