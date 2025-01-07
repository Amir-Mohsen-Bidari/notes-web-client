import type { Theme } from "$lib/types";
import { setContext, getContext } from "svelte";

export class AppSettings {
    theme = $state<Theme>("system");
}

let settingsKey = Symbol("settings");

export function setSettingsContext(settings: AppSettings) {
    return setContext(settingsKey, settings);
}

export function getSettingsContext() {
    return getContext<ReturnType<typeof setSettingsContext>>(settingsKey);
}