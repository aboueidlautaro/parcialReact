import { useEffect, useState } from "react";

const Home = () => {
  const [apis, setApis] = useState([]);
  const apiGeneral =
    "https://www.cultura.gob.ar/api/v2.0/convocatorias/?format=json";
  const datosApi = (apiGeneral) => {
    fetch(apiGeneral)
      .then((response) => response.json())
      .then((data) => setApis(data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    datosApi(apiGeneral);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};
export default Home;
