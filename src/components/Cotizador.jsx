import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa6";
import   Opciones  from "./Opciones";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useCotizador from "../hooks/useCotizador";
import usePresupuestos from "../hooks/usePresupuestos";


const Cotizador = () => {
  const [precio, setPrecio] = useState(0);
  const [datos, setDatos] = useState([]);
  const { elementos, setElementos } = useCotizador();
  const { Presupuestos, setPresupuestos } = usePresupuestos();

  const realizarCotizacion = () => {
    const { dimension, propiedad, ubicacion } = elementos;
    if (dimension < 30 || propiedad == 0 || ubicacion == 0) {
      Swal.fire("Error", "Debes completar los Datos", "error");
    }
    const cuenta = 5000 * dimension * ubicacion * propiedad;
    setPrecio(cuenta);
  };

  const guardar = () => {
    setPresupuestos([
      ...Presupuestos,
      {
        fecha: new Date().toDateString(),
        ...elementos,
        cuenta:
          5000 *
          elementos.dimension *
          elementos.ubicacion *
          elementos.propiedad,
      },
    ]);
    setPrecio(0);
  };
  useEffect(() => {
    const leer = async () =>
      setDatos(await (await fetch("/datos.json")).json());
    leer();
  }, []);
  return (
    <>
      <h2 className="titulo">Completar los datos Solicitados</h2>
      <nav>
        <Link to={"/Historiales"}>
          <FaClipboardList />
        </Link>
      </nav>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <Opciones
          datos={datos.filter(({ categoria }) => categoria == "propiedad")}
          label={"Selecciones el tipo de Propiedad"}
          tipo={"propiedad"}
        />
        <Opciones
          datos={datos.filter(({ categoria }) => categoria == "ubicacion")}
          label={"Seleccione su Ubicación"}
          tipo={"ubicacion"}
        />
        <label htmlFor="dimension">Metros Cuadrados</label>
        <input
          type="number"
          id="dimension"
          min={30}
          defaultValue={30}
          onInput={(e) =>
            setElementos({
              ...elementos,
              dimension: isNaN(parseInt(e.target.value))
                ? 0
                : parseInt(e.target.value) < 30
                ? 30
                : parseInt(e.target.value),
            })
          }
        />
        <button type="button" onClick={realizarCotizacion}>
          Cotizar
        </button>
      </form>
      {precio != 0 && (
        <>
          <p>El precio estimado es de ${precio.toFixed(2)}</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <button type="button" onClick={guardar}>
              Guardar
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Cotizador;