import type { PilotList } from "../models/pilot";

export const getListPilots = (): PilotList => {
    return [{ id: 1, firstName: 'Luke', lastName: 'Skywalker', grade: 'pilote' }];
}