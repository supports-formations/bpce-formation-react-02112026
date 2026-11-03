import { useState } from "react";
import PilotsImage from "./PilotsImage";

const ManageDisplayImage = () => {
    const [light, setLight] = useState(true);

    const listenClick = () => {
        console.info('--------------------------');
        console.info('listenClick 2.');
        setLight(!light); // dispatcher
    }
    
    return <>
        <button onClick={listenClick}>Afficher / Cacher l'image</button>
        {light && <PilotsImage url="https://static.wikia.nocookie.net/frstarwars/images/a/ad/Alliance_Rebelle.svg/revision/latest?cb=20150417164807" />}
        </>
}

export default ManageDisplayImage;