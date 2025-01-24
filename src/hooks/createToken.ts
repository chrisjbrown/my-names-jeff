import { constants, premades } from "../constants";

export default async function createToken(token, data) {
   const pf2eAutoNamer = game.settings.get(constants.moduleId, "pf2eAutoNamer");
   if (!game.user.isGM || token.actorLink || !pf2eAutoNamer) {
      return;
   }

   const premadeMatch = premades.pf2e.types.find((premade) => {
      return Array.from(token.actor.traits).find((trait) => trait === premade.traitKey);
   });

   if (premadeMatch) {
      try {
         const [...nameTables] = await Promise.all(premadeMatch.names.map(async (name) => await fromUuid(name.uuid)));
         const [...nameRolls] = await Promise.all(nameTables.map(async (table) => await table?.roll()));
         const names = nameRolls.map((roll) => roll.results[0].text);
         token.update({ name: `${names.join(" ")}` });
      } catch (error) {
         console.error("Failed to auto rename token", error);
         ui.notifications.warn("Failed to auto rename token");
      }
   }
}
