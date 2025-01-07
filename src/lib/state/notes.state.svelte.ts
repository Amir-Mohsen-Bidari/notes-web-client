import type { Note, NotesFilter } from "$lib/types";
import { getContext, setContext } from "svelte";

export class Notes {
    notes = $state<Note[]>([]);
    filter = $state<NotesFilter>({
        search: "",
        tags: [],
        sort: "asc",
        sortBy: "createdAt"
    });

    filtered = $derived.by(() => {
        let result = this.notes;
        if (this.filter.tags.length) {
            result = result.filter((note) => note.tags.some((tag) => this.filter.tags.includes(tag)));
        }
        if (this.filter.search) {
            result = result.filter((note) => note.content.includes(this.filter.search));
        }
        return result.sort((a, b) => {
            if (this.filter.sort === "asc") {
                return a[this.filter.sortBy] > b[this.filter.sortBy] ? 1 : -1;
            } else {
                return a[this.filter.sortBy] < b[this.filter.sortBy] ? 1 : -1;
            }
        });
    })

    add(note: Note) {
        this.notes.push(note);
    }

    remove(id: string) {
        this.notes = this.notes.filter((note) => note.id !== id);
    }
}

let notesKey = Symbol("notes");

export function setNotesContext(notes: Notes) {
    return setContext(notesKey, notes);
}

export function getNotesContext() {
    return getContext<ReturnType<typeof setNotesContext>>(notesKey);
}