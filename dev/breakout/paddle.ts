export class Paddle {
    private element: HTMLElement
    private posX: number
    private posY: number
    private speedX: number
    private inputLeft: number
    private inputRight: number

    constructor(){
        this.spawn();
    }

    public spawn(){
        this.element = document.createElement("paddle");
        let background = document.querySelector("background");
        background.appendChild(this.element);
        console.log("Paddle was created");

        //Create x and y values
        // this.posX = 100;
        // this.posY = 100;
    }

    public update(){

    }

    public reset(){

    }

    private onKeyLeft(){

    }

    private onKeyRight(){

    }

    public checkBorderCollision(){

    }

    public getRectancle(){

    }

    public getFutureRectangle(){

    }

}