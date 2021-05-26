# heyGame
edit to update pages


## UML Breakout

```ts

- class Game {
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
    - gameLoop()
    + level
    - checkCollision(a : ClientRect, b : ClientRest) : boolean
    + changeScore(amount : number)
    + changeLives(amount : number)
    |
    has class Level {

    }
    |
    has class Border {

    }
    |
    has class Paddle {
        pos
        controls

    }
    |
    has class Ball {
        
    }
    |
    has class Grid {
        has class Brick {
            
            Game.checkCollision(brick, ball)
        }
    }
}

```