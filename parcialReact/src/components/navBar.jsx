import { NavLink } from "react-router-dom";
import Convocatorias from "../routes/convocatorias";

const Navbar = () => {
  return (
    <>
      <header className="h-16 bg-black flex items-center">
        <div className="flex justify-start mx-8 items-center">
          <p className="text-3xl font-bold text-sky-200">PARCIAL</p>
        </div>
        <div className="flex justify-end">
          <NavLink className="mx-2 text-white" to="/tramites">
            Trámites
          </NavLink>
          <NavLink className="mx-2 text-white" to="/Convocatorias">
            Convocatorias
          </NavLink>
          <NavLink className="mx-2 text-white" to="/Convocatorias">
            Museos
          </NavLink>
          <NavLink className="mx-2 text-white" to="/Convocatorias">
            Programas
          </NavLink>
          <NavLink className="mx-2 text-white" to="/Convocatorias">
            Organismos
          </NavLink>
          <NavLink className="mx-2 text-white" to="/Convocatorias">
            Usuarios
          </NavLink>
        </div>
      </header>
    </>
  );
};
export default Navbar;
