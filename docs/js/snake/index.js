import { LearnWords } from "./level.js";
import { SnakeEngine } from "./snakeEngine.js";
let main = new SnakeEngine(document.querySelector('game'), 'tap');
main.level = new LearnWords();
main.start();
//# sourceMappingURL=index.js.map