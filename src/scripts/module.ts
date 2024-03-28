// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/module.css";
import { moduleId } from "./constants";
// import { MyModule } from "./types";

// let module: MyModule;

// load templates
loadTemplates(["../templates/token-config.hbs"]);

async function getTableFromPack(name: string) {
  const pack = game.packs.get("person-names");
  const entry = Array.from(pack.index).find((e: any) => e.name == name);
  return await pack.getDocument(entry?._id);
}

Hooks.once("init", () => {
  console.log(`Initializing ${moduleId}`);

  // module = (game as Game).modules.get(moduleId) as MyModule;
});

Hooks.on("renderTokenConfig", async function (app: any, html: JQuery) {
  if (!game.user.isGM) {
    return;
  }

  const enableTokenRename: boolean =
    app.token.getFlag("my-names-jeff", "enableTokenRename") || false;
  const characterTab = html.find(`div[data-tab="character"]`);
  const tokenConfig = await renderTemplate(
    "modules/my-names-jeff/templates/token-config.hbs",
    { enableTokenRename }
  );

  characterTab.append(tokenConfig);
});

Hooks.on("preCreateToken", async function (tokenDocument: any) {
  if (tokenDocument.actor?.flags["my-names-jeff"]?.["enableTokenRename"]) {
    const type = tokenDocument.actor?.flags["my-names-jeff"]?.["nameType"];
    if (type === "Dragon") {
      const dragonTable = await getTableFromPack(`Dragon Name`);
      let dragonName = await dragonTable.roll();
      tokenDocument.update({ name: `${dragonName.results[0].text}` });
      return;
    } else {
      const name1 = await getTableFromPack(`${type} First Name`);
      const name2 = await getTableFromPack(`${type} Last Name`);

      let n1 = await name1.roll();
      let n2 = await name2.roll();

      tokenDocument.update({
        name: `${n1.results[0].text} ${n2.results[0].text}`,
      });
      return;
    }
  }
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
