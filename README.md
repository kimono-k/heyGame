# heyGame
edit to update pages


## UML Breakout

```ts

- class Game {
    + globalScore : number
    + levelType : number = 1
    + level : number = 1
    |
    constructor() {
        startLevel(level)
    }
    |
    - gameLoop() {
        Level.update()
    }
    - checkCollision(a : ClientRect, b : ClientRest) : boolean
    + changeglobalScore(amount : number)
    + changeLives(amount : number)
    + startLevel(level : number) { new Level(level) }
    |
    has class Level {
        + score : number
        + promptText : string
        + nextPromptText : string
        + correctItem : string
        + lives : number = 3
        - gameOver : boolean = false
        + levelType : number = 1
        + level : number = 1
        |
        constructor(level) {
            init(level)
        }
        |
        - init(level : number) { switchcase levelinit 1 2 3 }
        + update() {
            Paddle.update()
            Ball.update()
            Grid.update()
            array Brick123.update()
        }
    }
    |
    has class Border {
        - element : HTMLElement
        - posX : number
        - posY : number
        - xsize : number
        - ysize : number
        - innerWith : number
        - innerHeight : number
        |
        + spawn()
        + update()
        + reset()
    }
    |
    has class Paddle {
        - element : HTMLElement
        - posX : number = clientWidth / 2
        - posY : number = clientHeight - 10
        - speedX : number
        - speedY : number
        - inputLeft : number = 65
        - inputRight : number = 68
        - inputUse : number
        - sticky : boolean = false
        |
        + spawn()
        + update()
        + reset()
        - onKeyUp()
        - onKeyDown()
        + checkBorderCollision()
        + getRectangle()
        + getFutureRectangle()
    }
    |
    has class Ball {
        - element : HTMLElement
        - posX : number
        - posY : number
        - speedX : number
        - speedY : number
        |
        + spawn()
        + update()
        + reset()
        + checkBorderCollision()
        + checkPaddleCollision()
        + checkBrickCollision()
        + bounceX()
        + bounceY()
        + toggleStick()
        + getRectangle()
        + getFutureRectangle()
    }
    |
    has class Grid {
        - element : HTMLElement
        - posX : number
        - posY : number
        - xsize : number
        - ysize : number
        - rows : number
        - columns : number
        |
        + spawn()
        + update()
        + reset()
        + getRectangle()
        |
        has class Brick {
            - element : HTMLElement
            - row  : number
            - column : number
            - itemtype : string
            - item : string
            - color : string
            - breakstatus : number{0-2}
            - hidden : boolean
            |
            constructor(row : number, column : number, breakstatus : number{0-2} = 2, color : string = blue, itemtype : default, item : string, hidden : boolean = false) {
                spawn()
            }
            |
            + spawn()
            + update()
            + reset()
            + hit()
            + break()
            + checkItem()
            + getRectangle()
            |
            has class FallingItem {
                - element : HTMLElement
                - item : string
                - posX : number
                - posY : number
                - speedX : number
                - speedY : number
                |
                + spawn()
                + update()
                + reset()
                + checkPaddleCollision()
                + pickup()
                + getRectangle()
                + getFutureRectangle()
            }
        }
    }
}



```