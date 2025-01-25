import { premades } from "../constants";

export default async function createToken(token, data) {
   if (token.actorLink) {
      return;
   }

   const premadeMatch = premades.pf2e.types.find((premade) => {
      return token.actor.traits.has(premade.traitKey);
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
