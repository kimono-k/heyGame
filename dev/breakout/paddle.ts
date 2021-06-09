import { GameObject } from "./gameObject.js";

export class Paddle extends GameObject{

    // private posX : number = window.innerWidth / 2
    // private posY : number = window.innerHeight - 10
    // private inputLeft : number = 65
    // private inputRight : number = 68
    

    // Properties

    // Constructor
    constructor(){
        super()
        super.spawn("paddle")
        super.speedX = 0;
        super.posX = 300
        super.posY = 500

        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
    }

    // Functions

    // gameloop
    public update() : void {
        super.update()
    }

    // general functions 
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


}