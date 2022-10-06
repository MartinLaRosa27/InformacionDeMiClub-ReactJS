import React from "react";
import { useUltimosPartidos } from "../hooks/useUltimosPartidos.jsx";
const img_not = require("../img/img_not.png");

export const UltimosPartidos = () => {
  const { resultados } = useUltimosPartidos();
  const { tabla } = useUltimosPartidos();

  return (
    <div className="partidos container">
      {/* PARTIDOS */}
      {resultados === 0 ? (
        <></>
      ) : (
        <>
          {" "}
          {resultados.map((resultado) => (
            <div className="card" key={resultado.idEvent}>
              <img
                src={
                  resultado.strThumb ? `${resultado.strThumb}` : `${img_not}`
                }
                className="card-img-top"
                alt={resultado.strEvent}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{resultado.strEvent}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {resultado.intHomeScore} - {resultado.intAwayScore}{" "}
                </h6>
                <p className="card-text">
                  {resultado.strLeague} | {resultado.dateEventLocal}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
      {/* TABLA */}
      {tabla.length === 0 ? (
        <>
          <div className="alert alert-warning" role="alert">
            Por favor, ingrese el nombre de un equipo de la LIGA PROFESIONAL
          </div>
        </>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Posición</th>
              <th scope="col">Club</th>
              <th scope="col">V - D - E</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((t) => (
              <tr key={t.idStanding}>
                <th scope="row">{t.intRank}</th>
                <td>{t.strTeam}</td>
                <td>
                  {t.intWin} - {t.intLoss} - {t.intDraw}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
