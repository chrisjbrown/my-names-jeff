// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/module.css";
import { moduleId } from "./constants";
// import { MyModule } from "./types";

// let module: MyModule;

// load templates
loadTemplates(["../templates/token-config.hbs"]);

Hooks.once("init", () => {
  console.log(`Initializing ${moduleId}`);

  // module = (game as Game).modules.get(moduleId) as MyModule;
});

Hooks.on("renderTokenConfig", async function (app: any, html: JQuery) {
  console.log("renderTokenConfig Hook");
  const enableTokenRename =
    app.token.getFlag("my-names-jeff", "enableTokenRename") || "";
  const characterTab = html.find(`div[data-tab="character"]`);
  const tokenConfig = await renderTemplate(
    "modules/my-names-jeff/templates/token-config.html",
    { enableTokenRename }
  );

  characterTab.append(tokenConfig);
});

Hooks.on("preCreateToken", async function () {
  console.log("preCreateToken Hook");
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
