import { FallingItem } from "./fallingitem.js";

export class Brick {
    // Parameters
    // Fields    
    private element : HTMLElement
    private row  : number
    private column : number
    private itemtype : string
    private item : string
    private color : string
    private breakstatus : number
    private hidden : boolean
    private fallingItem : FallingItem

    // Properties

    // Constructor
    constructor(row : number, column : number, breakstatus : number = 2, color : string = "blue", itemtype : string = "default", item : string, hidden : boolean = false) {
        this.spawn()
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

    // brick control
    public hit() : void {

    }

    public break() : void {

    }

    // global functions
    public checkItem() {

    }

    public getRectangle() : ClientRect {
        return this.element.getBoundingClientRect()
    }
}