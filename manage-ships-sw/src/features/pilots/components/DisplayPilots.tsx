import NoRow from "../../../shared/components/data/NoRow"
import type { PilotList } from "../models/pilot"
import OneRowPilot from "./OneRowPilot"

export type DisplayPilotsProps = {
    items: PilotList
}

const DisplayPilots = ({items}: DisplayPilotsProps) => {
    const trs = items.map(pilot => <OneRowPilot key={pilot.id} item={pilot} />);
    const withPilots = items && items.length > 0;
    const table = <table><tbody>{trs}</tbody></table>
    const noData = <NoRow content="pilote recruté" /> // utilisation de memo()

    return (
        <>
            {!withPilots && noData}
            {withPilots && table}
        </>
    )
}

export default DisplayPilots;