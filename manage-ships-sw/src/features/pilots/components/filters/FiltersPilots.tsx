import { useState } from "react"
import { getListPlanets } from "../../services/get-list-planets"
import SelectsPlanets from "./SelectsPlanets"

export type FilterPlanetByIdProps = {
     filterByPlanetId: (id: number) => void //output
}

export type FiltersPilotsProps = FilterPlanetByIdProps

const FiltersPilots = ({filterByPlanetId: filterById}: FiltersPilotsProps) => {
    const [planets] = useState(() => getListPlanets())

    const getId = (id: number) => {
        filterById(id);
    }

    return (
        <>
            <SelectsPlanets items={planets} filterByPlanetId={getId} />
        </>
    )
}

export default FiltersPilots;