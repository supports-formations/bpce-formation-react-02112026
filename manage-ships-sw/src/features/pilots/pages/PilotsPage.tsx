import { useState } from "react";
import DisplayPilots from "../components/DisplayPilots";
import { getListPilots } from "../services/get-list-pilots";
import ManageDisplayImage from "../components/ManageDisplayImage";

const PilotsPage = () => {    
    const pilots = getListPilots();
    console.info('PilotsPage 1.');

    return (
        <>
            <ManageDisplayImage />

            {/* {displayImage && <PilotsImage url="https://static.wikia.nocookie.net/frstarwars/images/a/ad/Alliance_Rebelle.svg/revision/latest?cb=20150417164807" /> } */}
            <h1>Gestion des pilotes</h1>
            <DisplayPilots items={pilots}  />
        </>
    )
}

export default PilotsPage;