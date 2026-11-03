import type { ArrayFromObject } from "../../../chore/types";

/**
 * @summary Pilot de l'alliance rebelle 
 */
export interface Pilot {
    id: number;
    firstName: string;
    lastName: string;
    grade: 'lieutenant' | 'caporal' | 'pilote';
}

export type PilotList = ArrayFromObject<Pilot>;