import { FormShim as ClientSettingApp } from "./settings/ClientSettingApp";
import { gameSettings } from "./settings/settingsStore";
import { constants } from './constants';

export default function registerSystemSettings() {
    gameSettings.init()
    game.settings.registerMenu(constants.moduleId, "configureNames", {
        name: "mnj.settings.configureNames",
        hint: "mnj.settings.configureNamesHint",
        label: "mnj.settings.configureNames",
        scope: "world",
        config: true,
        type: ClientSettingApp,
        default: false
    });
}