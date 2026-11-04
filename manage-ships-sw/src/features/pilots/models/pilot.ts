import type { ArrayFromObject } from "../../../chore/types";
import type { Planet } from "./planet";

/**
 * @summary Pilot de l'alliance rebelle 
 */
export interface Pilot {
    id: number;
    firstName: string;
    lastName: string;
    grade: 'lieutenant' | 'caporal' | 'pilote';
    planet: Planet;
    nbFights: number;
}

export type PilotList = ArrayFromObject<Pilot>;