import * as PIXI from "pixi.js";
const div = document.createElement("div");
div.innerText = "TEST";
const app = new PIXI.Application<HTMLCanvasElement>({
  background: "black",
  resizeTo: window,
});

document.body.appendChild(div);
document.body.appendChild(app.view);
