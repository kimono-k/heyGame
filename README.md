# heyGame
edit to update pages


## UML Breakout

```ts

- class Game {
    + globalScore : number
    levelType : number = 1
    + level : number = 1
    |
    constructor() {
        startLevel(level)
    }
    |
    - gameLoop()
    - checkCollision(a : ClientRect, b : ClientRest) : boolean
    + changeglobalScore(amount : number)
    + changeLives(amount : number)
    startLevel(level : number) { new Level(level)}
    |
    has class Level {
        + score : number
        + lives : number = 3
        - gameOver : boolean = false
        levelType : number = 1
        level : number = 1
        |
        constructor() {
            initLevel(level)
        }
        |
        initLevel(level : number) { switchcase levelinit 1 2 3}
    }
    |
    has class Border {
        - posX : number
        - posY : number
        innerwith
        innerheight
    }
    |
    has class Paddle {
        - posX : number = clientWidth / 2
        - posY : number = clientHeight - 10
        - speedX : number
        - speedY : number
        - inputLeft : number = 65
        - inputRight : number = 68
        sticky : boolean = false
        |
        checkcollisions()
    }
    |
    has class Ball {
        - posX : number
        - posY : number
        - speedX : number
        - speedY : number
        |
        bounce()
        stick()
        unstick()
    }
    |
    has class Grid {
        - posX : number
        - posY : number
        - xsize : number
        - ysize : number
        - rows : number
        - columns : number
        |
        + spawnBrick(row : number, column : number, breakstatus : number{0-2} = 2, item, hidden : boolean = false)
        |
        has class Brick {
            row
            column
            itemtype
            item : string
            breakstatus
            hidden
            |
            Game.checkCollision(brick, ball)
            has class FallingItem {
                item : string
                - posX : number
                - posY : number
                - speedX : number
                - speedY : number
            }
        }
    }
}

```