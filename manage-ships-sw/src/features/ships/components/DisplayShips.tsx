
import { ships } from '../__mocks__/ships';
import styles from './DisplayShips.module.css';
import OneRowShip from './OneRowShip';

const clickToFilter = () => {
    console.info('goToFilter');
}

const title = 'Liste des vaisseaux';


const rows = ships.map(ship => <OneRowShip key={ship.id} item={ship} />)


const DisplayShips = () => {
    console.info('DisplayShips');   
    const displayH1 = false;
    
    const titleH1 = <h1 className={styles.title}>{title}</h1>

    const style = {
        display: 'block'
    }

    return (
        <>
           { displayH1 && titleH1 }
           <button style={style} className={styles.filter} onClick={clickToFilter}>Filtrer</button>

           <table className={styles.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Matricule</th>
                    <th>Taille</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
           </table>
        </>
    )
}

// const DisplayShips = () => <table></table>

export default DisplayShips;