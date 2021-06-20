# heyGame
edit to update pages

## Changelog

### General (v0.1)

v0.1
- updated color pallete
- added grid styling
- added button styling
- updated readme
- added changelog

v0
- init file structure

### Snake

v0.1
- snake beweegt
- snake's richting kan worden verandert door te swipen

V0.2
- snake kan appels/letters eten
- snake kan groeien

V0.3
- letters verdwijnen na te worden gegeten
- nieuwe letter wordt gegenereerd nadat er één is gegeten

V0.4
- game heeft dynamische grootte op basis van scherm

V0.5
- classes stricter gemaakt (expliciete public/private/protected)
- ~~de game werkt niet meer~~

V0.6
- snake
    - NodeEventGenerator verwijdert
    - node classes verwijdert
    - InputManager class verwijdert
    - unnecessary Vector class functions verwijdert
    - Game class met SnakeEngine class samengevoegd
    - GameComponent class toegevoegd

V0.7
- Quality of life
    - Beetje speling met bewegen slang, kan draaien vlak nadat het een vakje is gepasseerd
    - Alternatieve input-manier toegevoegd: Tikken!
- interface en interactie hiertussen toegevoegd om levels te maken
    - simpel level gemaakt
- snake changelog vertaald want beetje dom als half NL half EN is

V0.8
- snake kan sterven
    - je gaat dood als je jezelf raakt
    - je gaat dood als je de rand raakt
    - scherm voor wanneer je dood bent om te restarten

V0.9
- tekst toegevoegd onderaan scherm
    - de tekst kan als soort progressiebalk worden gebruikt, twee divs over elkaar met andere kleur
- mogelijke levels gemaakt

V0.10
- letters worden uitgesproken als je ze pakt
- woorden worden uitgesproken als je ze pakt
- pauze vlak voor en na woord uitspreken

## to do

- cool effect ofzo wanneer woord is gepakt
- sprites
- geanimeerde sprites

### Breakout

v0.1
- added ball
- added paddle
- added breakout uml

v0 
- added first code

## General

### Links
https://heygamers.github.io/heyGame/

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
            }s
        }
    }
}

```

## Back-end systeem by Kimono
TODO
<strike>- db migrations</strike>
<br>
<strike>- templating</strike>
<br>
<strike>- for loop through data</strike>
<br>
<strike>- nice overview of data</strike>
<br>
- create api endpoint for @UpperC

## Snake

### UML
