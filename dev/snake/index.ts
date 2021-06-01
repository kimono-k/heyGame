import { Game } from "./game.js";
import { BaseNode } from "./includes/baseNode.js";
import { DivNode } from "./includes/graphics/DivNode.js";
import { DragNode } from "./includes/physics/dragNode.js";
import { Vector } from "./includes/vector.js";
import { SnakeEngine } from "./snakeEngine.js";

let main = new SnakeEngine(document.querySelector('game'));



main.start();
