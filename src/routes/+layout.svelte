<script lang="ts">
    import {
        setNotesContext,
        Notes
    } from "$lib/state/notes.state.svelte";
    import {
        setSettingsContext,
        AppSettings,
    } from "$lib/state/settings.state.svelte";

    let { children } = $props();

    setNotesContext(new Notes());
    setSettingsContext(new AppSettings());
</script>
<main>
    {@render children()}
</main>
