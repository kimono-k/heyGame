import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import { BrickGrid } from "./brickgrid.js";
import { Game } from "./game.js"

export class Level {
    // Parameters
    // Fields    
    private gameInstance : Game
    private score : number
    private promptText : string
    private nextPromptText : string
    private correctItem : string
    private correctAmount : number
    private lives : number = 3
    private isGameOver : boolean = false
    private levelType : number = 1
    private level : number = 1
    private paddle : Paddle
    private ball : Ball
    private brickGrid : BrickGrid


    // Properties

    // Constructor
    constructor(level : number, gameInstance : Game){
        this.gameInstance = gameInstance
        console.log("Level was created!");

        this.init(level)
    }

    // Functions

    // gameloop
    public update() : void {
        // todo: updates classes linken
        // paddle.update()
        this.ball.update()
        // grid.update()
        // array Brick123.update()
        this.paddle.update();

        this.checkBallPaddleCollision()
    }

    // general functions 
    private init(level : number) { 
        this.paddle = new Paddle;
        this.ball = new Ball(this.gameInstance);
        // todo: switchcase levelinit 1 2 3 
    }

    public reset() : void {
        // todo: reset
        // delete all > init()
    }

    public end() : void {

    }

    public gameOver() : void {

    }

    public finish() : void {

    }

    // glabal funtions
    public changeLives(amount : number) : void {

    }
    public changeScore(amount : number) : void {

    }

    public checkBallPaddleCollision() {
        let hit = this.gameInstance.checkCollision(this.ball.getRectancle(), this.paddle.getRectancle())
        
        if (hit) {
            this.ball.bounceY()
        }
    }
}