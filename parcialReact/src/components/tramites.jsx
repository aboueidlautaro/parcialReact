import React from "react";
import { Markup } from "interweave";

const TramitesComp = ({ apisTram = [] }) => {
  return (
    <div>
      {apisTram.map((item, index) => (
        <div key={index}>
          <div className="mx-64 ">
            <div className="rounded-md my-6 border-2 border-sky-600">
              <h1 className="text-2xl font-bold text-center">{item.titulo}</h1>
              <p>{item.bajada}</p>
            </div>
            <Markup content={item.cuerpo} />

            <a to={item.documentos}></a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TramitesComp;
