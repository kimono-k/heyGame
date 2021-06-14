export class GameObject {
b
    protected element : HTMLElement
    protected posX : number
    protected posY : number
    protected speedX : number
    protected speedY : number
    protected scale : number = 1

    update(){
        this.posX += this.speedX
        this.posY += this.speedY

        this.element.style.transform = `matrix(${this.scale}, 0 , 0, ${this.scale}, ${this.posX}, ${this.posY})`
    }

    protected spawn(tagName : string) : void {
        this.element = document.createElement(tagName);
        let level = document.querySelector("level");
        level.appendChild(this.element); 
    }

    public getRectancle() : ClientRect {
        //TODO get the rectangle for the collision
        return this.element.getBoundingClientRect()
    }

    public getFutureRectangle() : ClientRect {
        // TODO: getFutureRectangle
        return this.element.getBoundingClientRect()
    }
        
     

    protected reset(tagName : string) : void {
        // TODO: kill element

        // TODO: reset all numbers

        this.spawn(tagName)
    }
}