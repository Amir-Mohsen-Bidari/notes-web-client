<script lang="ts">
    import { getNotesContext } from "$lib/state/notes.state.svelte";
    import { getSettingsContext } from "$lib/state/settings.state.svelte";

    let notes = getNotesContext();
    let settings = getSettingsContext();
</script>
<article>
    There are {notes.filtered.length} filtered notes.<br/>
    The theme is {settings.theme}.
</article>
