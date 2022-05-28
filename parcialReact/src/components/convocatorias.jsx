import React from "react";
import { Markup } from "interweave";
import { Link } from "react-router-dom";

const ConvocatoriasComp = ({ apisConv = [] }) => {
  return (
    <div>
      {apisConv.map((item, index) => (
        <div key={index}>
          <div className="mx-64 ">
            <img src={item.imagen} className="mx-auto my-4  w-[1200px]" />
            <div className="rounded-md my-6 border-2 border-sky-600">
              <h1 className="text-2xl font-bold text-center">{item.titulo}</h1>
              <p>{item.bajada}</p>
            </div>
            <Markup content={item.cuerpo} />
            <div className="flex flex-col items-center my-4">
              <div>
                {(() => {
                  if (item.estado === "abierta") {
                    return (
                      <p>
                        Estado de la convocatoria:{" "}
                        <span className="text-green-500">● {item.estado}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p>
                        Estado de la convocatoria:{" "}
                        <span className="text-red-400">● {item.estado}</span>
                      </p>
                    );
                  }
                })()}
              </div>
              <p>
                Fecha inicio:{" "}
                <span className="font-bold">{item.fecha_inicio}</span>
              </p>
              <p>
                Fecha fin: <span className="font-bold">{item.fecha_fin}</span>
              </p>
              <a to={item.documentos}></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConvocatoriasComp;
