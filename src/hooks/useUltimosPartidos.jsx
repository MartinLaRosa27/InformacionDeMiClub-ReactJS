import { useContext } from "react";
import UltimosPartidosContext from "../context/UltimosPartidosContext.jsx";

export const useUltimosPartidos = () => {
  return useContext(UltimosPartidosContext);
};
