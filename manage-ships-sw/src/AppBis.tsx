import { PlanetsPage } from "./features/planets/pages/PlanetsPage";

function AppBis() {
    console.info('App bis')
    return (
        <>
            <h1>Gestion de mes vaisseaux</h1>
            {/* <DisplayShips /> */}
            {/* <PilotsPage /> */}
            <PlanetsPage />
        </>
    )
} // renvoie toujours la même chose : fonction pure / déterministe

export default AppBis;