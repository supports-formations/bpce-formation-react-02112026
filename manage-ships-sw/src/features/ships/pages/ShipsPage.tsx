import AddShip from "../components/AddShip"
import DisplayShips from "../components/DisplayShips"

const ShipsPage = () => {
    return (
        <>
            <AddShip saveNewShip={ship => console.info(ship)} />
            <DisplayShips />
        </>
    )
}

export default ShipsPage