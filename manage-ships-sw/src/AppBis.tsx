import { useContext } from "react";
import { ThemeContext } from "./shared/components/contexts/models/theme-context";

function AppBis() {
  console.info("App bis");
  const context = useContext(ThemeContext);

  const style = {
    backgroundColor: context?.current == 'dark' ? 'black': 'white'
  }

  return (
    <>
      <div style={style}>
        <h1>Bienvenue</h1>
        {/* <DisplayShips /> */}
        {/* <PilotsPage /> */}
      </div>
    </>
  );
} // renvoie toujours la même chose : fonction pure / déterministe

export default AppBis;
