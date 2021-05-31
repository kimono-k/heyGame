import { Level } from "./level.js";

class Game {
    // Parameters
    // Fields    
    private globalScore : number
    private levelType : number = 1
    private levelNumber : number = 1
    private level : Level

    // Properties

    // Constructor
    constructor(){
        console.log("Game was created!");

        this.startLevel(1)

        this.gameLoop()
    }

    // Functions

    // gameLoop
    private gameLoop() {
        this.level.update()

        requestAnimationFrame(() => this.gameLoop()) 
    }

    // general functions 
    private startLevel(level : number) : void { 
        this.level = new Level(1)
    }

    // global functions
    public checkCollision(a : ClientRect, b : ClientRect) : boolean {

    }

    public changeglobalScore(amount : number) : void {

    }


}

window.addEventListener("load", () => new Game())