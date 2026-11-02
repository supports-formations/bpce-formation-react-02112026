import DisplayShips from "./features/ships/components/DisplayShips";

function AppBis() {
    console.info('App bis')
    return (
        <>
            <h1>Gestion de mes vaisseaux</h1>
            <DisplayShips />
        </>
    )
} // renvoie toujours la même chose : fonction pure / déterministe

export default AppBis;