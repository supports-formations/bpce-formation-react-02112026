import { useEffect, useState } from "react";
import DisplayPilots from "../components/DisplayPilots";
import FiltersPilots from "../components/filters/FiltersPilots";
import ManageDisplayImage from "../components/ManageDisplayImage";
import type { PilotList } from "../models";
import { getListPilots } from "../services/get-list-pilots";



const PilotsPage = () => {    
    //const pilots = getListPilots();
    const [pilots, setPilots] = useState<PilotList | undefined>(undefined)
    const [planetId, setPlanetId] = useState(0)

    const pilotsComputed = planetId > 0 ? pilots?.filter(item => item.planet.id == planetId) : pilots;

    useEffect(() => {
        getListPilots(planetId).then(items => setPilots(items))
    }, [planetId])

    console.info('PilotsPage 1.');

    const filterPilotsByPlanetId = (id: number) => {
        setPlanetId(id);
    }

    return (
        <>
            <ManageDisplayImage />

            <FiltersPilots filterByPlanetId={filterPilotsByPlanetId} />

            {/* {displayImage && <PilotsImage url="https://static.wikia.nocookie.net/frstarwars/images/a/ad/Alliance_Rebelle.svg/revision/latest?cb=20150417164807" /> } */}
            <h1>Gestion des pilotes</h1>
            <DisplayPilots items={pilotsComputed}  />
        </>
    )
}

export default PilotsPage;