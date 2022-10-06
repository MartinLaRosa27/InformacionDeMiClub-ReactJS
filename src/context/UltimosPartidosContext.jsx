import { useState, createContext } from "react";
import axios from "axios";
const UltimosPartidosContext = createContext();

export const UltimosPartidosProvider = ({ children }) => {
  const [resultados, setResultados] = useState([]);
  const [tabla, setTabla] = useState([]);

  const ultimosPartidos = async (equipo) => {
    try {
      const { data } = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=${equipo}`
      );
      setResultados(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getTabla = async () => {
    try {
      const { data } = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4406&s=2022`
      );
      setTabla(data.table);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UltimosPartidosContext.Provider
      value={{ ultimosPartidos, resultados, getTabla, tabla }}
    >
      {children}
    </UltimosPartidosContext.Provider>
  );
};

export default UltimosPartidosContext;
