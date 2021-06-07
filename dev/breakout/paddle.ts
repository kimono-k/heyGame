export class Paddle {
    // Parameters
    // Fields    
    private element : HTMLElement
    private posX : number
    private posY : number
    // private posX : number = window.innerWidth / 2
    // private posY : number = window.innerHeight - 10
    private speedX : number = 0
    private inputLeft : number = 65
    private inputRight : number = 68

    // Properties

    // Constructor
    constructor(){
        this.spawn();

        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
    }

    // Functions

    // gameloop
    public update() : void {
        //update the paddle so it can move
        this.posX += this.speedX

        //draw the sprite on the right pace
        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }

    // general functions 
    public spawn() : void {
        this.element = document.createElement("paddle");
        let background = document.querySelector("background");
        background.appendChild(this.element);
        console.log("Paddle was created");

        //Create x and y values
        this.posX = 300;
        this.posY = 500;
    }

    public reset() : void {
        //TODO reset the whole class
    }

    // keybinds
    private onKeyDown(e: KeyboardEvent) : void {
        switch (e.key) {
            case "a":
            case "ArrowLeft" :
                this.speedX = -5
                break
            case "d":
            case "ArrowRight":
                this.speedX = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent) : void {
        switch (e.key) {
            case "a":
            case "d":
            case "ArrowLeft" :
            case "ArrowRight":
                this.speedX = 0
                break
        }
    }

    // collision
    public checkBorderCollision(a: ClientRect, b: ClientRect) {
      game.checkCollision(a, b)
    }

    // global functions
    public getRectancle() : ClientRect {
        //TODO get the rectangle for the collision
        return this.element.getBoundingClientRect()
      
    }

    public getFutureRectangle() : ClientRect {

    }

}