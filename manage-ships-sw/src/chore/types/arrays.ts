export type DefaultObject = { id: number };

export type ArrayFromObject<T extends DefaultObject> = T[];