import { TJSGameSettings, type GameSetting } from "#runtime/svelte/store/fvtt/settings";

import { constants, settings } from "../constants";

class MNJGameSetting extends TJSGameSettings {
   public settingsData: any;

   constructor() {
      super(constants.moduleId);
      this.settingsData = null;
   }

   init(): void {
      const namespace = constants.moduleId;
      const allSettings: GameSetting[] = [
         {
            namespace,
            key: settings.types,
            options: {
               name: "types",
               scope: "world",
               config: false,
               type: Array,
               default: [],
            },
         },
         {
            namespace,
            key: settings.premades,
            options: {
               name: "premades",
               scope: "world",
               config: false,
               type: Array,
               default: Object.keys(settings.premades),
            },
         },
         {
            namespace,
            key: settings.enabledPremades,
            options: {
               name: "enabledPremades",
               scope: "world",
               config: false,
               type: Array,
               default: [],
            },
         },
         {
            namespace,
            key: settings.pf2eAutoNamer,
            options: {
               name: "pf2eAutoNamer",
               scope: "world",
               config: false,
               type: Boolean,
               default: false,
            },
         },
      ];

      this.registerAll(allSettings, false);
   }
}

export const gameSettings = new MNJGameSetting();
