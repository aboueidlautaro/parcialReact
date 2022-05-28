import React from "react";
import { Markup } from "interweave";

const MuseoComp = ({ apisMuseo = [] }) => {
  return (
    <div>
      {apisMuseo.map((item, index) => (
        <div key={index}>
          <div className="mx-64 ">
            <div className="rounded-md my-6 border-2 border-sky-600">
              <h1 className="text-2xl font-bold text-center">{item.nombre}</h1>
              <p>{item.direccion}</p>
              <p>{item.telefono}</p>
              <p>{item.descripcion}</p>
            </div>
            <Markup content={item.cuerpo} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MuseoComp;
