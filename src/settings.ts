import { FormShim as ClientSettingApp } from "./settings/ClientSettingApp";
import { gameSettings } from "./settings/settingsStore";
import { constants } from './constants';

export default function registerSystemSettings() {
    gameSettings.init()
    game.settings.registerMenu(constants.moduleId, "names", {
        name: "names",
        hint: "names",
        label: "names",
        scope: "world",
        config: true,
        type: ClientSettingApp,
        default: false
    });
}