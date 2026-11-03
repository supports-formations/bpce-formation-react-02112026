import DisplayPilots from "../components/DisplayPilots";
import PilotsImage from "../components/PilotsImage";
import { getListPilots } from "../services/get-list-pilots";

const PilotsPage = () => {
    const pilots = getListPilots();

    return (
        <>
            <PilotsImage url="https://static.wikia.nocookie.net/frstarwars/images/a/ad/Alliance_Rebelle.svg/revision/latest?cb=20150417164807" />
            <h1>Gestion des pilotes</h1>
            <DisplayPilots items={pilots}  />
        </>
    )
}

export default PilotsPage;