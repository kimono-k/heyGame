import { FallingItem } from "./fallingitem.js";
import { GameObject } from "./gameObject.js";

export class Brick extends GameObject{
    // Parameters
    // Fields    
    private row  : number
    private column : number
    private itemtype : string
    private item : string
    private color : string
    public breakstatus : boolean = false
    private hidden : boolean
    private fallingItem : FallingItem

    // Properties

    // Constructor
    constructor(item : string) {
        super()
        this.item = item
        this.spawn(item)
    }

    // constructor(row : number, column : number, breakstatus : number = 2, color : string = "blue", itemtype : string = "default", item : string, hidden : boolean = false) {
    //     super()
    //     this.spawn()
    // }
    
    // Functions

    // gameloop
    public update() : void {
        super.update()
    }

    // general functions 
    public spawn(item : string) : void {
        console.log("brick spawn")
        this.element = document.createElement("brick");
        let brickgrid = document.querySelector("brickgrid");
        brickgrid.appendChild(this.element);
        this.element.innerHTML = item
    }

    public reset() : void {

    }

    // brick control
    public hit() : void {

    }

    public break() : void {
        this.element.classList.add("dead")
        this.element.innerHTML = ""
        this.breakstatus = true
    }

    // global functions
    public checkItem() {

    }

    public getRectangle() : ClientRect {
        return this.element.getBoundingClientRect()
    }
}