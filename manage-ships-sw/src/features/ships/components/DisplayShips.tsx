import type { Ships } from '../models';
import styles from './DisplayShips.module.css';

const clickToFilter = () => {
    console.info('goToFilter');
}

const title = 'Liste des vaisseaux';

const ships: Ships = [{id: 1, matricule: 'XDFF', size: 300},{id: 1, matricule: 'XDFF', size: 300},];

const rows = ships.map(item => <tr><td>{item.id}</td><td>{item.matricule}</td><td>{item.size}</td></tr>)

const DisplayShips = () => {
    console.info('DisplayShips');   
    

    return (
        <>
           <h1 className={styles.title}>{title}</h1>
           <button className={styles.filter} onClick={clickToFilter}>Filtrer</button>

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