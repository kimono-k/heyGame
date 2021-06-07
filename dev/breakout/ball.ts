import { Game } from "./game.js"

export class Ball {
    // Parameters
    // Fields    
    private element : HTMLElement
    private gameInstance : Game

    private posX : number = 500
    private posY : number = 100
    private speedX : number = 1
    private speedY : number = -1
    private sticky : boolean = false
    private inputUse : number  
    private scale : number = 0.3

    public levelWidth : number
    public levelHeight : number

    // Properties

    // Constructor
    constructor(gameInstance : Game){
        this.gameInstance = gameInstance
        this.spawn();
    }

    // Functions

    // gameloop
    public update() : void {
        this.posX += this.speedX
        this.posY += this.speedY
        
        this.element.style.transform = `matrix(${this.scale}, 0 , 0, ${this.scale}, ${this.posX}, ${this.posY})`
        
        this.checkBorderCollision()
    }

    // general functions 
    public spawn() : void {
        this.element = document.createElement("ball");

        let level = document.querySelector("level");

        level.appendChild(this.element);

        console.log("spawn ball")
    }

    public reset() : void {
        // TODO: kill element

        // TODO: reset all numbers

        this.spawn()
    }

    // collision
    public checkBorderCollision() {
        let rightBorder = this.gameInstance.levelWidth - this.element.clientWidth * this.scale * 2.2
        let bottemBorder = this.gameInstance.levelHeight - this.element.clientHeight * this.scale * 2.2

        console.log(this.element.clientWidth * this.scale)
        
        if(this.posY > bottemBorder || this.posY < 0 - this.element.clientWidth * this.scale * 1.2) {
            this.bounceY()
        }

        if(this.posX < 0 - this.element.clientWidth * this.scale * 1.2 || this.posX > rightBorder){
            this.bounceX()
        }

    }

    public checkPaddleCollision() {
        // TODO: paddle collision handler
        // send velocity
        // check if sticky
    }

    public checkBrickCollision() {
        // TODO: brick collision handler
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

    // glabal funtions
    public getRectangle() : ClientRect {
        return this.element.getBoundingClientRect()
    }

    public getFutureRectangle() : ClientRect {
        // TODO: getFutureRectangle
        return this.element.getBoundingClientRect()
    }
}