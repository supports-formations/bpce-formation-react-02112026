import type { Pilot } from "../models/pilot";

const OneRowPilot = ({item}: {item: Pilot}) => {
    return <tr><td>{item.firstName}</td><td>{item.grade}</td></tr>
}

export default OneRowPilot;