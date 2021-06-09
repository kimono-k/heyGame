import { Level } from "./level.js";

export class Game {
    // Parameters
    // Fields    
    private element : HTMLElement
    private globalScore : number
    private levelType : number = 1
    private levelNumber : number = 1
    private level : Level

    public levelWidth : number
    public levelHeight : number
    // Properties

    // Constructor
    constructor(){
        console.log("Game was created!");
        this.element = document.querySelector("game");


        this.startLevel(1)

        this.gameLoop()
    }

    // Functions

    // gameLoop
    private gameLoop() {
        this.level.update()

        this.updateLevelSize();

        requestAnimationFrame(() => this.gameLoop()) 
    }

    // general functions 
    private startLevel(level : number) : void { 
        this.updateLevelSize;

        this.level = new Level(1, this)
        console.log("level started")
    }

    public updateLevelSize() {
        this.levelWidth = this.element.clientWidth
        this.levelHeight = this.element.clientHeight

        // console.log(this.levelWidth)
        // console.log(this.levelHeight)
    }

    // global functions
    public checkCollision(a : ClientRect, b : ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public changeglobalScore(amount : number) : void {

    }

}

window.addEventListener("load", () => new Game())