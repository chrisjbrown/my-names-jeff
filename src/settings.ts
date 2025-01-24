import { FormShim as ClientSettingApp } from "./settings/ClientSettingApp";
import { gameSettings } from "./settings/settingsStore";
import { constants } from "./constants";

export default function registerSystemSettings() {
   gameSettings.init();
   game.settings.registerMenu(constants.moduleId, "configureNames", {
      name: "mnj.settings.configureNames",
      hint: "mnj.settings.configureNamesHint",
      label: "mnj.settings.configureNames",
      scope: "world",
      config: true,
      type: ClientSettingApp,
      default: false,
   });
   game.settings.register(constants.moduleId, "pf2eAutoNamer", {
      name: "mnj.settings.pf2eAutoNamer",
      hint: "mnj.settings.pf2eAutoNamerHint",
      label: "mnj.settings.pf2eAutoNamer",
      scope: "world",
      config: true,
      type: Boolean,
      default: false,
   });
}
