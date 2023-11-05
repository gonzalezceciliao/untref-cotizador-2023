import { useContext } from "react";
import PresupuestosContext from "../context/PresupuestosContext";

const usePresupuestosContext = () => useContext(PresupuestosContext);
export default usePresupuestosContext;