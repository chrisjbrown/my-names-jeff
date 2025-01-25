import setup from "./hooks/setup";
import renderTokenHUD from "./hooks/renderTokenHUD";
import createToken from "./hooks/createToken";
import { constants } from "./constants";

Hooks.once("setup", setup);
Hooks.once("ready", () => {
   if (game.user.isGM) {
      // manual rename
      Hooks.on("renderTokenHUD", renderTokenHUD);

      // pf2e only
      const pf2eAutoNamer = game.settings.get(constants.moduleId, "pf2eAutoNamer");
      if (game.system.id === "pf2e" && pf2eAutoNamer) {
         Hooks.on("createToken", createToken);
      }
   }
});
