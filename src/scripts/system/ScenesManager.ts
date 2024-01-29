import * as PIXI from "pixi.js";
import { App } from "./App";

export class ScenesManager {
  public container: PIXI.Container;
  private scene: any | null;

  constructor() {
    this.container = new PIXI.Container();
    this.container.interactive = true;
    this.scene = null;
  }

  start(scene: string): void {
    if (this.scene) {
      this.scene.remove();
    }

    this.scene = new App.config.scenes[scene]();
    this.container.addChild(this.scene.container);
  }
}
