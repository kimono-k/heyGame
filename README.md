# heyGame
edit to update pages

## Changelog

### General (v0.1)

v0.1
- added button styling
- updated readme
- added changelog

v0
- init file structure

### Snake

v0.1

- snake's direction can be changed by swiping
+ snake moves

V0.2

- snake is able to eat apples/letters
- snake can grow

V0.3

- letters disappear after being eaten
- new letters get generated after one is eaten

v0 

### Breakout

v0.1
- added breakout uml

v0 
- added first code

## General

### Links
https://luukftf.github.io/heyGame/

### Technical Structure

![](/readme/img/technicaldesign.jpg)

### Git Quick Refrence

https://github.com/LuukFTF/knowledgebase/blob/master/articles/development/git.md

## Breakout

### UML

![](/readme/img/UML_breakout.jpg)

```ts

- class Game {
    - globalScore : number
    - levelType : number = 1
    - levelNumber : number = 1
    - level : Level
    |
    constructor() {
        startLevel(level)
    }
    |
    - gameLoop() {
        Level.update()
    }
    - checkCollision(a : ClientRect, b : ClientRect) : boolean
    + changeglobalScore(amount : number) : void

    - startLevel(level : number) : void { new Level(level) }
    |
    has class Level {
        - score : number
        - promptText : string
        - nextPromptText : string
        - correctItem : string
        - correctAmount : number
        - lives : number = 3
        - gameOver : boolean = false
        - levelType : number = 1
        - level : number = 1
        - border : Border
        - paddle : Paddle
        - ball : Ball
        - brickGrid : BrickGrid
        |
        constructor(level) {
            init(level)
        }
        |
        - init(level : number) { switchcase levelinit 1 2 3 }
        + update() : void {
            Paddle.update()
            Ball.update()
            Grid.update()
            array Brick123.update()
        }
        + reset() : void {delete all > init()}
        + end() : void
        + gameOver() : void
        + finnish() : void
        + changeLives(amount : number) : void
        + changeScore(amount : number) : void
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
            + spawn() : void
            + update() : void
            + reset() : void
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
            |
            + spawn() : void
            + update() : void
            + reset() : void
            - onKeyUp()
            - onKeyDown()
            + checkBorderCollision()
            + getRectangle() : ClientRect
            + getFutureRectangle() : ClientRect
        }
        |
        has class Ball {
            - element : HTMLElement
            - posX : number
            - posY : number
            - speedX : number
            - speedY : number
            - sticky : boolean = false
            - inputUse : number
            |
            + spawn() : void
            + update() : void
            + reset() : void
            + checkBorderCollision()
            + checkPaddleCollision()
            + checkBrickCollision()
            + bounceX() : void
            + bounceY() : void
            + toggleStick() : void
            + getRectangle() : ClientRect
            + getFutureRectangle() : ClientRect
        }
        |
        has class BrickGrid {
            - element : HTMLElement
            - posX : number
            - posY : number
            - xsize : number
            - ysize : number
            - rows : number
            - columns : number
            - bricks : Brick[]
            |
            + spawn() : void
            + update() : void
            + reset() : void
            + getRectangle() : ClientRect
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
                - fallingItem : FallingItem
                |
                constructor(row : number, column : number, breakstatus : number{0-2} = 2, color : string = blue, itemtype : default, item : string, hidden : boolean = false) {
                    spawn()
                }
                |
                + spawn() : void
                + update() : void
                + reset() : void
                + hit() : void
                + break() : void
                + checkItem()
                + getRectangle() : ClientRect
                |
                has class FallingItem {
                    - element : HTMLElement
                    - item : string
                    - posX : number
                    - posY : number
                    - speedX : number
                    - speedY : number
                    |
                    + spawn() : void
                    + update() : void
                    + reset() : void
                    + checkPaddleCollision()
                    + pickup() : void
                    + getRectangle() : ClientRect
                    + getFutureRectangle() : ClientRect
                }
            }
        }
    }
}

```

## Snake

### UML
