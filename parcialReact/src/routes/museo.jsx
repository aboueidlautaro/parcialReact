import { useEffect, useState } from "react";

import MuseoComp from "../components/museo";

const Museo = () => {
  const [apisMuseo, setApis] = useState([]);
  const apiMuseo = "https://www.cultura.gob.ar/api/v2.0/tramites/?format=json";
  const datosApi = (apiMuseo) => {
    fetch(apiMuseo)
      .then((response) => response.json())
      .then((data) => setApis(data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    datosApi(apiMuseo);
  }, []);

  return (
    <>
      <div>
        <MuseoComp apisMuseo={apisMuseo} />
      </div>
    </>
  );
};
export default Museo;
