import { Link } from "react-router-dom";
import Opciones from "./Opciones";
import { useEffect, useState } from "react";

const Cotizador = () => {
    const [datos, setDatos] = useState([]);
    const realizarCotizacion = () => {
        console.log("cotizar");
    };
    useEffect(() => {
        const leer = async () => setDatos(await (await fetch("../datos.json")));
        leer();
    }, []);
    return (
        <>
        <nav>
            <Link to= {"/Presupuestos"}>
             <img src="C:\Users\54116\OneDrive\Desktop\cotizador-react-untref\src\assets\clipboard-outline.svg" alt="" srcset="" />
            </Link>
        </nav>
        <form action="" onSubmit={(e) => e.preventDefault()}>
        <SelectorOption
          datos={[]}
          label={"Primera Seleccion"}
          tipo={"primera"}
        />
        <SelectorOption
          datos={[]}
          label={"Segunda Seleccion"}
          tipo={"segunda"}
        />
        <label htmlFor="dimension">Metros Cuadrados</label>
        <input type="number" id="dimension" defaultValue={30} />
        <button type="button" onClick={realizarCotizacion}>
          Cotizar
        </button>
      </form>
        </>  
    )
};

export default Cotizador;