import axios from "axios";
import type { Pilot, PilotList } from "../models/pilot";

// export const getListPilots = (): PilotList => {
//     return [
//         {id: 1, firstName: 'Luke', lastName: 'Skywalker', grade: 'pilote' , planet: {id: 1, name: 'Tatooine'}, nbFights: 100},
//         {id: 2, firstName: 'Leia', lastName: 'Skywalker', grade: 'caporal' , planet: {id: 3, name: 'Coruscant'}, nbFights: 0},
//     ];
// }

type OneItemApi = {
    name: string,
    url: string
}

type OnePersonApi = {
    homeworld: string
} & OneItemApi

type ResponseApi = OnePersonApi[]

export const getListPilots = async (planetId: number): Promise<PilotList> => {
    const response = await axios.get<ResponseApi>('https://swapi.info/api/people?planetId=' + planetId);
    const items: PilotList = [];

    response.data.forEach(async item => {
        const resultItem: Pilot = { firstName: item.name, lastName: '', grade: "caporal", id: 0, nbFights: 0, planet: {id: 0, name: ''} };
        const planetResponse = await axios.get<OneItemApi>(item.homeworld);
        resultItem.planet.name = planetResponse.data.name;
        resultItem.planet.id = +planetResponse.data.url.replace('https://swapi.info/api/planets/', '');

        items.push(resultItem);
    })

    return items;
}