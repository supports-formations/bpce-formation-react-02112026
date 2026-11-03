import type { Ship } from "../models";

export type OneRowShipProps = {
    item: Ship
}

const OneRowShip = (props: OneRowShipProps) => {
    console.info('OneRowShip', props);  

    return (
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.matricule}</td>
            <td>{props.item.size}</td>
        </tr>
    )
}

export default OneRowShip;