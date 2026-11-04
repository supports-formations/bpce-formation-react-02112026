import { useState } from "react";
import PilotsImage from "./PilotsImage";

const ManageDisplayImage = () => {
    console.info('ManageDisplayImage');
    const [light, setLight] = useState(false);
    const [count, setCount] = useState(0);

    setTimeout(() => {
        console.info('===> coucou')
    }, 0); // macrotasking

    const listenClick = () => {
        console.info('--------------------------');
        console.info('listenClick 2.');
        setLight(!light); // dispatcher
        // setLight(false);
        // setLight(true); // microtasking
        setCount(old => old + 1);
        setCount(old => old + 1);
        //setCount(count + 1)
    } 
    
    return <>
        <button onClick={listenClick}>Afficher / Cacher l'image {count}</button>
        {light && <PilotsImage url="https://static.wikia.nocookie.net/frstarwars/images/a/ad/Alliance_Rebelle.svg/revision/latest?cb=20150417164807" />}
        </>
}

export default ManageDisplayImage;