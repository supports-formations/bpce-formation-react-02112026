import { useState } from "react";
import DisplayPilots from "../components/DisplayPilots";
import FiltersPilots from "../components/filters/FiltersPilots";
import ManageDisplayImage from "../components/ManageDisplayImage";
import { getListPilots } from "../services/get-list-pilots";



const PilotsPage = () => {    
    //const pilots = getListPilots();
    const [pilotsData, setPilotsData] = useState(() => getListPilots())
    console.info('PilotsPage 1.');

    const filterPilotsByPlanetId = (id: number) => {
        if(id > 0) {
            const filter = pilotsData.raw.filter(item => item.planet.id == id);
            setPilotsData({ raw: pilotsData.raw, current: filter })
        }
    }

    return (
        <>
            <ManageDisplayImage />

            <FiltersPilots filterByPlanetId={filterPilotsByPlanetId} />

            {/* {displayImage && <PilotsImage url="https://static.wikia.nocookie.net/frstarwars/images/a/ad/Alliance_Rebelle.svg/revision/latest?cb=20150417164807" /> } */}
            <h1>Gestion des pilotes</h1>
            <DisplayPilots items={pilotsData.current}  />
        </>
    )
}

export default PilotsPage;