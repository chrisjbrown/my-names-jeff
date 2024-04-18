// Do not remove this import. If you do Vite will think your styles are dead
// code and not include them in the build output.
import "../styles/module.css";
import { moduleId, tokenTypes } from "./constants";

// load templates
loadTemplates([
  "../templates/token-config.hbs",
  "../templates/token-types.hbs",
]);

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

Hooks.once("init", () => {
  console.log(`Initializing ${moduleId}`);
});

Hooks.on("renderTokenHUD", (hud: any, html: any) => {
  let optionsShown = false;
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
    const infoContainer = html.find(".token-info-container");
    
    if (optionsShown) {
      html.find(".my-names-jeff.token-names-wrap")?.remove();
      optionsShown = false;
      return;
    }

    optionsShown = true;
    const tokenNameButtonTemplate = await renderTemplate(
      "modules/my-names-jeff/templates/token-types.hbs",
      { types: tokenTypes }
    );
    
    infoContainer.append(tokenNameButtonTemplate);

    const tokenNameButtons = html.find(".my-names-jeff.token-names-wrap").find("button")
    tokenNameButtons.on("click", (e) => {
      setName(e.target.value, token)
    });
  })
})

//   characterTab.append(tokenConfig);

    // const button = event.currentTarget;

    // button.classList.toggle("active");
    // button.querySelector(`.my-names-jeff.token-names`).classList.toggle("active");
  // });

  // tokenNameButton.insertAdjacentHTML("beforeend", `
  //     <div class="my-names-jeff token-names">
  //         ${visionModes.map(mode => `
  //         <div class="vision-5e token-name ${mode.id === token.document.sight.visionMode ? "active" : ""} flexrow" data-token-name="${mode.id}">
  //             <span class="vision-5e token-name-label">${game.i18n.localize(mode.label)}</span>
  //         </div>`).join("")}
  //     </div>
  // `);
// });

// Hooks.on("renderTokenConfig", async function (app: any, html: JQuery) {
//   if (!game.user.isGM) {
//     return;
//   }

//   const enableTokenRename: boolean =
//     app.token.getFlag("my-names-jeff", "enableTokenRename") || false;

//   const selectedType =
//     app.token.flags["my-names-jeff"]?.["nameType"] || "Human";
//   const types = tokenTypes.map((type) => {
//     return {
//       name: type,
//       selected: type === selectedType,
//     };
//   });

//   const characterTab = html.find(`div[data-tab="character"]`);
//   const tokenConfig = await renderTemplate(
//     "modules/my-names-jeff/templates/token-config.hbs",
//     { enableTokenRename, types }
//   );

//   characterTab.append(tokenConfig);
// });

// Hooks.on("createToken", async function (actor: any) {
//   if (actor?.flags["my-names-jeff"]?.["enableTokenRename"]) {
//     const type = actor.flags["my-names-jeff"]?.["nameType"];
//     if (type === "Dragon") {
//       try {
//         const dragonNameTable = await getTableFromPack(`Dragon Name`);
//         const dragonName = await dragonNameTable.roll();
//         actor.update({ name: `${dragonName.results[0].text}` });
//       } catch (error) {
//         console.error("my-names-jeff", "Error getting Dragon name");
//       }
//       return;
//     } else {
//       try {
//         const [firstNameTable, lastNameTable] = await Promise.all([
//           getTableFromPack(`${type} First Name`),
//           getTableFromPack(`${type} Last Name`),
//         ]);
//         const [firstName, lastName] = await Promise.all([
//           firstNameTable.roll(),
//           lastNameTable.roll(),
//         ]);

//         actor.update({
//           name: `${firstName.results[0].text} ${lastName.results[0].text}`,
//         });
//       } catch (error) {
//         console.error("my-names-jeff", `Error getting ${type} name`);
//       }
//       return;
//     }
//   }
// });
