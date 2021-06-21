import { Brick } from "./brick.js";

export class BrickGrid {
    // Parameters
    // Fields 
    private element : HTMLElement
    private posX : number
    private posY : number
    private xsize : number
    private ysize : number
    private rows : number
    private columns : number
    public bricks : Brick[] = []
    public brickAmount : number
    private items : string[]

    // Properties

    // Constructor
    constructor(brickAmount : number){
        this.spawn()

        this.brickAmount = brickAmount
        this.items = ["", "b", "o", "s", "", "b", "o", "o", "t", "", "", "b", "o", "o", "s", "d", "o", "o", "s", "", "b", "o", "t", "e", "n"]

        console.log("BrickGrid constructor", brickAmount)

        for (let i = 0; i < this.brickAmount; i++) {
            this.bricks.push(new Brick(this.items[i]))         
        }
    }

    // Functions

    // gameloop
    public update() : void {

        for (let brick of this.bricks) {
            brick.update()
        }


    }

    // general functions 
    public spawn() : void {
        this.element = document.createElement("brickgrid");
        let level = document.querySelector("level");
        level.appendChild(this.element);

    }
    public reset() : void {

    }

    // glabal funtions
    public getRectangle() : ClientRect {
        return this.element.getBoundingClientRect()
    }
}