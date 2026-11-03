import type { Pilot } from "../models/pilot";

const OneRowPilot = ({item}: {item: Pilot}) => {
    console.info('OneRowPilot');
    return <tr><td>{item.firstName}</td><td>{item.grade}</td></tr>;
}

export default OneRowPilot;