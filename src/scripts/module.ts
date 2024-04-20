// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/module.css";
import { moduleId, tokenTypes } from "./constants";

// load templates
loadTemplates([
  "../templates/token-config.hbs",
  "../templates/token-types.hbs",
]);

let NAME_TYPES_SHOWN = false;

async function getTableFromPack(name: string) {
  const pack = game.packs.get("my-names-jeff.person-names");
  const entry = Array.from(pack.index).find((e: any) => e.name == name);
  return await pack.getDocument(entry?._id);
}

async function setName(type: string, token: Token) {
  if (!token) {
    return;
  }

  if (type === "Dragon") {
    try {
      const dragonNameTable = await getTableFromPack(`Dragon Name`);
      const dragonName = await dragonNameTable.roll();
      token.document.update({ name: `${dragonName.results[0].text}` });
    } catch (error) {
      console.error("my-names-jeff", "Error getting Dragon name");
    }
    return;
  } else {
    try {
      const [firstNameTable, lastNameTable] = await Promise.all([
        getTableFromPack(`${type} First Name`),
        getTableFromPack(`${type} Last Name`),
      ]);
      const [firstName, lastName] = await Promise.all([
        firstNameTable.roll(),
        lastNameTable.roll(),
      ]);

      token.document.update({
        name: `${firstName.results[0].text} ${lastName.results[0].text}`,
      });
    } catch (error) {
      console.error("my-names-jeff", `Error getting ${type} name`);
    }
    return;
  }
}

async function renderNameTypes(html: any, token: Token) {
  if (NAME_TYPES_SHOWN) {
    html.find(".my-names-jeff.token-names-wrap")?.remove();
    NAME_TYPES_SHOWN = false;
    return;
  }

  NAME_TYPES_SHOWN = true;
  const tokenNameButtonTemplate = await renderTemplate(
    "modules/my-names-jeff/templates/token-types.hbs",
    { types: tokenTypes }
  );
  
  html.find(".token-info-container")?.append(tokenNameButtonTemplate);

  const tokenNameButtons = html.find(".my-names-jeff.token-names-wrap").find("button")
  tokenNameButtons.on("click", (e) => {
    setName(e.target.value, token)
  });
}

Hooks.once("init", () => {
  console.log(`Initializing ${moduleId}`);
});

Hooks.on("renderTokenHUD", (hud: any, html: any) => {
  if (!game.user.isGM) return;

  const token = hud.object;
  html[0].querySelector(`.control-icon[data-action="target"]`)
    .insertAdjacentHTML("beforebegin", `
      <div class="control-icon" data-action="token-name">
        <i class="fas fa-person"></i>
      </div>
    `);

  const tokenNameButton = html.find(`.control-icon[data-action="token-name"]`);

  tokenNameButton.on("click", async (event: MouseEvent) => {
    event.preventDefault();
    renderNameTypes(html, token);
  })
})
