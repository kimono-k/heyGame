export class GameObject {
b
    protected element : HTMLElement
    protected posX : number
    protected posY : number
    protected speedX : number
    protected scale : number = 0.3

    update(){
        //update the X position so it can move
        this.posX += this.speedX

        this.element.style.transform = `matrix(${this.scale}, 0 , 0, ${this.scale}, ${this.posX}, ${this.posY})`
    }

    protected spawn(tagName : string) : void {
        this.element = document.createElement(tagName);
        let level = document.querySelector("level");
        level.appendChild(this.element); 
    }

    protected getRectancle() : ClientRect {
        //TODO get the rectangle for the collision
        return this.element.getBoundingClientRect()
    }

    protected getFutureRectangle() : ClientRect {
        // TODO: getFutureRectangle
        return this.element.getBoundingClientRect()
    }
        
     

    protected reset(tagName : string) : void {
        // TODO: kill element

        // TODO: reset all numbers

        this.spawn(tagName)
    }
}