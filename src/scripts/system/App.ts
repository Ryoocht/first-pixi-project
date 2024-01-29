import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import PixiPlugin from "gsap/PixiPlugin";
import { ScenesManager } from "./ScenesManager";
import { Loader } from "./Loader";

interface AppConfig {
  scenes: string[];
}

class Application {
  public config: AppConfig;
  private app: PIXI.Application;
  private scenes: ScenesManager;
  private loader: Loader;

  run(config: AppConfig) {
    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);

    this.config = config;

    this.app = new PIXI.Application({ resizeTo: window });
    document.body.appendChild(this.app.view);

    this.scenes = new ScenesManager();
    this.app.stage.interactive = true;
    this.app.stage.addChild(this.scenes.container);

    this.loader = new Loader(this.app.loader, this.config);
    this.loader.preload().then(() => this.start());
  }

  res(key) {
    return this.loader.resources[key].texture;
  }

  sprite(key) {
    return new PIXI.Sprite(this.res(key));
  }

  start() {
    this.scenes.start("Game");
  }
}

export const App = new Application();
