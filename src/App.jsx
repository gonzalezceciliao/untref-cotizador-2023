import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Presupuestos } from "./components/Presupuestos";
import  Cotizador  from "./components/Cotizador";
import PresupuestosContext from "./context/PresupuestosContext";
import CotizadorContext from "./context/CotizadorContext";
import { useState } from 'react'
import useLocalStorage from "./hooks/useLocalStorage";



function App() {
  const [elementos, setElementos] = useState({dimension:30, propiedad:0, ubicacion:0});
  const [Presupuestos, setPresupuestos] = useLocalStorage("Presupuestos", []);
  return (
<>

      <PresupuestosContext.Provider value={{Presupuestos, setPresupuestos}}>
        <CotizadorContext.Provider value={{elementos, setElementos }}>
          <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Cotizador />}></Route>
            <Route 
            path="/presupuestos" 
            element={<Presupuestos />}
            ></Route>
          </Routes>
          </BrowserRouter>
        </CotizadorContext.Provider>
      </PresupuestosContext.Provider>
</>
  );
};

export default App;
