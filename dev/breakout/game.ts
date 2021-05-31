import { Paddle } from "./paddle.js";

class Game {
    
    paddle: Paddle;

    constructor(){
        console.log("Game was created!");
        this.paddle = new Paddle;
        this.gameLoop();
    
    }

    private gameLoop() {
        this.paddle.update();

        requestAnimationFrame(() => this.gameLoop()) 
    }
}

new Game();