import { useEffect, useState } from "react"
import type { PlanetList } from "../../pilots/models"
import { Spinner } from "react-bootstrap"

export const PlanetsPage = () => {
    const [planets, setPlanets] = useState<PlanetList | undefined>(undefined);

   //fetch('https://swapi.info/api/planets').then(response => response.json()).then(items => setPlanets(items))
    const myPromise = () => new Promise<PlanetList>((resolve) => {
        console.info('PROMESSSE')

         //setPlanets([{id: 1, label: 'tatooine'}])
         setTimeout(() => {
             resolve([{id: 1, name: 'tatooine'}]) // MICRO TASK
         }, 1500);


         console.info('PROMESSSE 2')

        //resolve(1)
    })

    console.info('PRE PlanetsPage')
    
    
    useEffect(() => {
        async function executeCallApi() {
            //const items = await myPromise();
            const response = await fetch('https://swapi.info/api/planets')
            const items = await response.json()

            setPlanets(items);
        }
        executeCallApi();
    })

    console.info('POST PlanetsPage')

    return (
        <>

            {!planets && <Spinner animation="grow" />}
            {planets && <table><tbody>{planets.map(item => <tr><td>{item.name}</td></tr>)}</tbody></table>}
        </>
    )
}