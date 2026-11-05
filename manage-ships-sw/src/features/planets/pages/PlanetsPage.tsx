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
             resolve([{id: 1, label: 'tatooine'}]) // MICRO TASK
         }, 1500);


         console.info('PROMESSSE 2')

        //resolve(1)
    })

    console.info('PRE PlanetsPage')
    
    
    useEffect(() => {
        //  const prom = myPromise()

        //  prom.then(items => {
        //         setPlanets(items)
        //         return items;
        //     })

        // prom.then(result => console.info(result))

        async function executeCallApi() {
            const items = await myPromise();

            setPlanets(items);
        }
        executeCallApi();
    //     console.info('effect')

        // setTimeout(() => {
        //     setPlanets([{id: 1, label: 'tatooine'}])
        // }, 1000);
    })

    console.info('POST PlanetsPage')

    return (
        <>

            {!planets && <Spinner animation="grow" />}
            {planets && <table>{planets.map(item => <tr><td>{item.label}</td></tr>)}</table>}
        </>
    )
}