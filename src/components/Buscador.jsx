import React, { useState } from "react";
import { useBuscador } from "../hooks/useBuscador.jsx";
import { useUltimosPartidos } from "../hooks/useUltimosPartidos.jsx";

export const Buscador = () => {
  //
  const { equiposArg } = useBuscador();
  const { ultimosPartidos } = useUltimosPartidos();
  const { getTabla } = useUltimosPartidos();

  //
  const [equipo, setEquipo] = useState("");
  const [error, setError] = useState(false);

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (equipo.length <= 0) {
      setError(true);
    } else {
      setError(false);
      ultimosPartidos(equipo);
      getTabla();
    }
  };

  //
  return (
    <div className="buscador">
      <div className="container">
        {error ? (
          <div className="alert alert-danger" role="alert">
            Por favor, ingrese un nombre de equipo valido
          </div>
        ) : (
          <></>
        )}
        {/* EQUIPO ARG */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="form-label">Equipo Favorito</label>
          <select
            className="form-select"
            required
            name="pais"
            value={equipo}
            onChange={(e) => {
              setEquipo(e.target.value);
            }}
          >
            <option defaultValue="" value={135156}>
              Club favorito...
            </option>
            {equiposArg.map((equipoArg) => (
              <option value={equipoArg.idTeam} key={equipoArg.idTeam}>
                {equipoArg.strTeam}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
        {/* EQUIPO ARG */}
      </div>
    </div>
  );
};
