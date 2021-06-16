import { Game } from "./game.js";
import { GameObject } from "./gameObject.js";
import { SoundManager } from "../snake/soundManager.js";

export class Paddle extends GameObject {
    private sound: SoundManager;
    private gameInstance: Game
    // Properties

    // Constructor
    constructor(gameInstance: Game) {
        super()
        this.gameInstance = gameInstance
        super.spawn("paddle")
        this.speedX = 0
        this.speedY = 0;
        this.posX = 300
        this.posY = 500
        this.scale = 1

        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    // Functions

    // gameloop
    public update(): void {
        if (!this.checkBorderCollision()) {
            super.update()
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

        if (this.posX < 0 || this.posX > rightBorder) {
            this.posX = 300
            return true
        } else {
            return false
        }
    }
}