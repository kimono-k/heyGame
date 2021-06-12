import { LearnLetters, LearnWords, RandomLetters } from "./level.js";
import { SnakeEngine } from "./snakeEngine.js";

let main = new SnakeEngine(document.querySelector('game'), 'tap');

main.level = new LearnLetters();

main.start();
