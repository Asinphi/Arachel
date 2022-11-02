// Allow pop-outs to be maximized to their full size
import { Arachel } from "../module";

Hooks.on("PopOut:loaded", (app: Application, popout: HTMLElement) => {
    popout.style.maxHeight = "100vh";
    Arachel.log("Maximized popout", app, popout);
})
