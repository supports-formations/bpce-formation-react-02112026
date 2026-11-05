import { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../contexts/models/theme-context";
import type { Theme } from "../contexts/models/context-theme";

const MainMenu = () => {
  const context = useContext(ThemeContext);

  return (
    <nav>
        <select onChange={e => context?.dispatch(e.target.value as Theme)}>
            <option>[Selection theme]</option>
            <option value="light">Lumineux</option>
            <option value="dark">Obscur (de la force)</option>
        </select>
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
  );
};

export default MainMenu;
