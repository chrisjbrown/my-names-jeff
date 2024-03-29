import { compilePack, extractPack } from "@foundryvtt/foundryvtt-cli";

// await extractPack("./src/packs/person-names.db", "./src/packs/person-names", {
//   nedb: true,
// });

// Compile a LevelDB compendium pack.
compilePack("./src/packs/", "./packs/person-names");
