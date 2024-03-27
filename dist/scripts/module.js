var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/style.scss";
import { moduleId } from "./constants";
// import { MyModule } from "./types";
// let module: MyModule;
Hooks.once("init", () => {
    console.log(`Initializing ${moduleId}`);
    // module = (game as Game).modules.get(moduleId) as MyModule;
});
Hooks.on("renderTokenConfig", function (app, html) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("renderTokenConfig Hook");
        const enableTokenRename = app.token.getFlag("my-names-jeff", "enableTokenRename") || "";
        const characterTab = html.find(`div[data-tab="character"]`);
        const tokenConfig = yield renderTemplate("modules/my-names-jeff/templates/token-config.html", { enableTokenRename });
        characterTab.append(tokenConfig);
    });
});
Hooks.on("preCreateToken", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("preCreateToken Hook");
    });
});
// Hooks.on("renderActorDirectory", (_: Application, html: JQuery) => {
//   const button = $(
//     `<button class="cc-sidebar-button" type="button">🐶</button>`
//   );
//   button.on("click", () => {
//     module.dogBrowser.render(true);
//   });
//   html.find(".directory-header .action-buttons").append(button);
// });
