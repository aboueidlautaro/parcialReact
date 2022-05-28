import "./index.css";
import Home from "./routes/home";

import { Route, Routes } from "react-router-dom";
import Convocatorias from "./routes/convocatorias";
import Tramites from "./routes/tramites";
import Navbar from "./components/navBar";
import Museo from "./routes/museo";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="convocatorias" element={<Convocatorias />} />
          <Route path="tramites" element={<Tramites />} />
          <Route path="museo" element={<Museo />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
