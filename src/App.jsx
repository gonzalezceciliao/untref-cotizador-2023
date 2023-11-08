import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cotizador from "./components/Cotizador";
import Presupuestos from "./components/Presupuestos";
import PresupuestosContext from "./context/PresupuestosContext";
import CotizadorContext from "./context/CotizadorContext";
import { useState } from 'react'


function App() {
  const [elementos, setElementos] = useState({});
  return (
<>

      <PresupuestosContext.Provider value={{}}>
        <CotizadorContext.Provider value={{ elementos, setElementos }}>
          <BrowserRouter>
          <Routes>
            <Route path="/Cotizador" index element={<Cotizador />}></Route>
            <Route path="/Presupuestos" element={<Presupuestos />}></Route>
          </Routes>
          </BrowserRouter>
        </CotizadorContext.Provider>
      </PresupuestosContext.Provider>
</>
  );
};

export default App;
