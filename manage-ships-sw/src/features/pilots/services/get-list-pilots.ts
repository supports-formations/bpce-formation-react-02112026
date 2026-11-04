import type { PilotList } from "../models/pilot";

export const getListPilots = (): PilotList => {
    return [
        {id: 1, firstName: 'Luke', lastName: 'Skywalker', grade: 'pilote' , planet: {id: 1, label: 'Tatooine'}, nbFights: 100},
        {id: 2, firstName: 'Leia', lastName: 'Skywalker', grade: 'caporal' , planet: {id: 3, label: 'Coruscant'}, nbFights: 0},
    ];
}