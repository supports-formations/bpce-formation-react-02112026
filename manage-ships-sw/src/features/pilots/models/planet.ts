import type { ArrayFromObject } from "../../../chore/types";

export interface Planet {
    id: number;
    name: string;
}

export type PlanetList = ArrayFromObject<Planet>