export class Paddle {
    private element: HTMLElement
    private posX: number
    private posY: number
    private speedX: number = 0
    private inputLeft: number
    private inputRight: number

    constructor(){
        this.spawn();

        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
    }

    public spawn(){
        this.element = document.createElement("paddle");
        let background = document.querySelector("background");
        background.appendChild(this.element);
        console.log("Paddle was created");

        //Create x and y values
        this.posX = 500;
        this.posY = 600;
    }

    public update(){
        //TODO update the paddle so it can move
        this.posX += this.speedX;

        //TODO draw the sprite on the right pace
        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }

    public reset(){
        //TODO reset the whole class
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key) {
            case "a":
            case "ArrowLeft" :
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
            case "ArrowLeft" :
            case "ArrowRight":
                this.speedX = 0
                break
        }
    }

    public checkBorderCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    public getRectancle(){
        //TODO get the rectangle for the collision
        return this.element.getBoundingClientRect()
    }

    public getFutureRectangle(){

    }

}