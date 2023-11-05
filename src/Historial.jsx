import { Link } from "react-router-dom";
import Historiales from "../Components/Historiales";

function Historial () {
  return (
    <><br /><br />
      <h1>Historial  📋</h1>
      <Tabla />
      <Link to={"/"}>
        <button id="volver" className="btn btn-dark">VOLVER </button>
      </Link>
    </>
  );
}

export default Historial;