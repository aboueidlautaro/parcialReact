import { useEffect, useState } from "react";

import TramitesComp from "../components/tramites";

const Tramites = () => {
  const [apisTram, setApis] = useState([]);
  const apiTram = "https://www.cultura.gob.ar/api/v2.0/tramites/?format=json";
  const datosApi = (apiTram) => {
    fetch(apiTram)
      .then((response) => response.json())
      .then((data) => setApis(data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    datosApi(apiTram);
  }, []);

  return (
    <>
      <div>
        <TramitesComp apisTram={apisTram} />
      </div>
    </>
  );
};
export default Tramites;
