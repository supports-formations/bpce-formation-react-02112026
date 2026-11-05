import { NavLink } from "react-router";

const MainMenu = () => {
    return <nav>
        <ol>
            <li>
                {/* <a href="/pilots">Pilotes</a>
                <a href="/ships">Vaisseaux</a> */}
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/pilots">Pilotes</NavLink>
            </li>
            <li>
                <NavLink to="/ships">Vaisseaux</NavLink>
            </li>
        </ol>
    </nav>
}

export default MainMenu;