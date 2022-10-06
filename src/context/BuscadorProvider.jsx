import { useState, useEffect, createContext } from "react";
import axios from "axios";
const BuscadorContext = createContext();

export const BuscadorProvider = ({ children }) => {
  const [equiposArg, setEquiposArg] = useState([]);

  const listaEquiposArg = async () => {
    try {
      const { data } = await axios.get(
        "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Argentinian%20Primera%20Division"
      );
      setEquiposArg(data.teams);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    listaEquiposArg();
  }, []);

  return (
    <BuscadorContext.Provider value={{ equiposArg }}>
      {children}
    </BuscadorContext.Provider>
  );
};

export default BuscadorContext;
