import type { PlanetList } from "../../models";
import type { FilterPlanetByIdProps } from "./FiltersPilots";

export type SelectPlanetsProps = {
    items: PlanetList, //input
} & FilterPlanetByIdProps

const SelectsPlanets = ({items, filterByPlanetId: filterById}: SelectPlanetsProps) => {
    const options = items.map(item => <option value={item.id} key={item.id}>{item.name}</option>)

    const selectPlanetId = (e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        const id =  +e.target.value;
        filterById(id);
    }

    return (
        <>
            <div>
                <label>Choix de la planète</label>
                <select onChange={selectPlanetId}>
                    <option value='0'>[Choix de la planète]</option>
                    {options}
                </select>
            </div>
        </>
    )
}

export default SelectsPlanets;