import type { PilotList } from "../models/pilot";

export type PilotsImageProps = {
    url: string,
    pilots ?: PilotList
}

const PilotsImage = (props: PilotsImageProps) => {
    const value = props.pilots ? props.pilots.length : 0;

    return (
        <div>
            <img src={props.url} /><br /><i>Nb pilots: {value}</i>
        </div>
    )
}

export default PilotsImage;