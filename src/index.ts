import setup from "./hooks/setup";
import renderTokenHUD from "./hooks/renderTokenHUD";
import createToken from "./hooks/createToken";

Hooks.once("setup", setup);
Hooks.on("renderTokenHUD", renderTokenHUD);
Hooks.on("createToken", createToken);
