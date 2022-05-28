import { useEffect, useState } from "react";
import ConvocatoriasComp from "../components/convocatorias";

const Convocatorias = () => {
  const [apisConv, setApis] = useState([]);
  const apiConvocatorias =
    "https://www.cultura.gob.ar/api/v2.0/convocatorias/?format=json";
  const datosApi = (apiConvocatorias) => {
    fetch(apiConvocatorias)
      .then((response) => response.json())
      .then((data) => setApis(data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    datosApi(apiConvocatorias);
  }, []);

  return (
    <>
      <div>
        <ConvocatoriasComp apisConv={apisConv} />
      </div>
    </>
  );
};
export default Convocatorias;
