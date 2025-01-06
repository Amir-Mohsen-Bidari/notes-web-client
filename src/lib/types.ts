export type Note = {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    syncedAt: string;
    viewId: string;
    tags: string[];
}

export type Theme = "light" | "dark" | "system";

export type NotesFilter = {
    search: string;
    tags: string[];
    sort: "asc" | "desc";
    sortBy: "createdAt" | "updatedAt" | "content";
}