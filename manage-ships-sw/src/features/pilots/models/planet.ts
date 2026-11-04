import type { ArrayFromObject } from "../../../chore/types";

export interface Planet {
    id: number;
    label: string;
}

export type PlanetList = ArrayFromObject<Planet>