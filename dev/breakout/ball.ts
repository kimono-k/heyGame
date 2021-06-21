import { Game } from "./game.js"
import { GameObject } from "./gameObject.js"

export class Ball extends GameObject{
    // Parameters
    // Fields    
    private gameInstance : Game
    private sticky : boolean = false
    private inputUse : number  
    public levelWidth : number
    public levelHeight : number

    // Properties

    // Constructor
    constructor(gameInstance : Game){
        super()
        this.gameInstance = gameInstance
        super.spawn("ball")
        super.posX = 500
        super.posY = 600
        super.speedY = 1
        super.speedX = 1
        super.scale = 0.3
    }

    // Functions

    // gameloop
    public update() : void {
        super.update()

        
        this.checkBorderCollision()
    }

    // general functions 

    // collision
    public checkBorderCollision() {
        let rightBorder = this.gameInstance.levelWidth - this.element.clientWidth * this.scale * 2.2
        let bottemBorder = this.gameInstance.levelHeight - this.element.clientHeight * this.scale * 2.2
    
        // console.log(this.element.clientWidth * this.scale)
        
        if(this.posY > bottemBorder || this.posY < 0 - this.element.clientWidth * this.scale * 1.2) {
            this.bounceY()
        }

        if(this.posX < 0 - this.element.clientWidth * this.scale * 1.2 || this.posX > rightBorder){
            this.bounceX()
        }

    }

    public paddleCollisionHandler() {
        this.bounceY()
        // TODO: paddle collision handler
        // send velocity
        // check if sticky
    }



    // ball control
    public bounceX() : void  {
        this.speedX *= -1
    }

    public bounceY() : void {
        this.speedY *= -1
    }

    public toggleStick() : void {
        // TODO: toggle stick
    }


}