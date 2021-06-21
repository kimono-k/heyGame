import { Game } from "./game.js";
import { GameObject } from "./gameObject.js";
import { TouchManager } from "../snake/touchManager.js";
import { Vector } from "../snake/math/vector.js";

export class Paddle extends GameObject {
    private touch: TouchManager;
    private gameInstance: Game;
    private speed = 8; // dit is de snelheid van de paddle
    // Properties

    // Constructor
    constructor(gameInstance: Game) {
        super()
        this.gameInstance = gameInstance
        super.spawn("paddle")
        this.speedX = 0
        this.speedY = 0;
        this.posX = 300
        this.posY = 700
        this.scale = 1

        let touch = new TouchManager();
        touch.initListeners();
        this.touch = touch;

        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    // Functions

    // gameloop
    public update(): void {
        if (!this.checkBorderCollision()) {
            super.update()
        }
        if (this.touch.touchDown) {
            let pos = this.touch.lastMove;
            let gameRect = document.querySelector('level').getBoundingClientRect();
            pos = pos.subtract(new Vector(gameRect.x + 76.5, gameRect.y));
            let diff = pos.x - this.posX;
            this.speedX = Math.sign(diff) * Math.min(this.speed, Math.abs(diff));
        } else {
            this.speedX = 0;
        }
    }

    // general functions 
    // keybinds
    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key) {
            case "a":
            case "ArrowLeft":
                this.speedX = -5
                break
            case "d":
            case "ArrowRight":
                this.speedX = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key) {
            case "a":
            case "d":
            case "ArrowLeft":
            case "ArrowRight":
                this.speedX = 0
                break
        }
    }

    // collision

    public checkBorderCollision(): boolean {
        let rightBorder = this.gameInstance.levelWidth - this.element.clientWidth * this.scale

        if (this.posX > rightBorder) {
            this.posX = rightBorder
            return true
          }
        
            if (this.posX < 0) {
                this.posX = 0;
                return true
            }else{
                return false
            }
    }
}