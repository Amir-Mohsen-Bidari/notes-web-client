import type { Theme } from "$lib/types";
import { setContext, getContext } from "svelte";

class AppSettings {
    theme = $state<Theme>("system");
}

let settingsKey = Symbol("settings");

export function setSettingsContext(settings: AppSettings) {
    setContext(settingsKey, settings);
}

export function getSettingsContext() {
    return getContext(settingsKey);
}