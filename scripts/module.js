// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import { moduleId, tokenTypes } from "./constants";

// Load templates
loadTemplates([
  "./templates/token-config.hbs",
  "./templates/token-types.hbs"
]);

let NAME_TYPES_SHOWN = false;

/**
 * // get table from pack
 * @param {string} name
 * @returns {document}
 */
async function getTableFromPack(name) {
  const pack = game.packs.get("my-names-jeff.person-names");
  const entry = Array.from(pack.index).find(e => e.name === name);
  return await pack.getDocument(entry?._id);
}

/**
 * // set name of token
 * @param {string} type
 * @param {Token} token
 */
async function setName(type, token) {
  if (!token) {
    console.error("my-names-jeff", "Token not found");
    return;
  }

  if (type === "Dragon") {
    try {
      const dragonNameTable = await getTableFromPack("Dragon Name");
      const dragonName = await dragonNameTable.roll();
      token.document.update({ name: `${dragonName.results[0].text}` });
    } catch(error) {
      console.error("my-names-jeff", "Error getting Dragon name");
    }
  } else {
    try {
      const [firstNameTable, lastNameTable] = await Promise.all([
        getTableFromPack(`${type} First Name`),
        getTableFromPack(`${type} Last Name`)
      ]);
      const [firstName, lastName] = await Promise.all([
        firstNameTable.roll(),
        lastNameTable.roll()
      ]);

      token.document.update({
        name: `${firstName.results[0].text} ${lastName.results[0].text}`
      });
    } catch(error) {
      console.error("my-names-jeff", `Error getting ${type} name`);
    }
  }
}

/**
 * // render types of names beside token
 * @param {HTMLElement} html
 * @param {Token} token
 */
async function renderNameTypes(html, token) {
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

  html.find(".col.left")?.append(tokenNameButtonTemplate);

  const tokenNameButtons = html.find(".my-names-jeff.token-names-wrap").find("button");
  tokenNameButtons.on("click", async e => {
    await setName(e.target.value, token);
    NAME_TYPES_SHOWN = false;
  });
}

Hooks.once("init", () => {
  console.log(`Initializing ${moduleId}`);
});

Hooks.on("renderTokenHUD", (hud, html) => {
  if (!game.user.isGM || hud.object.document.actorLink ) return;

  const token = hud.object;
  html[0].querySelector(".control-icon[data-action=\"config\"]")
    .insertAdjacentHTML("beforebegin", `
      <div class="control-icon" data-action="token-name">
        <i class="fas fa-person"></i>
      </div>
    `);

  const tokenNameButton = html.find(".control-icon[data-action=\"token-name\"]");

  tokenNameButton.on("click", async event => {
    event.preventDefault();
    renderNameTypes(html, token);
  });
});
