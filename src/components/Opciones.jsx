import React from 'react'

const Opciones = ({ datos, label, tipo }) => {
  const {elementos, setElementos} = useCotizador();
  return (
    <>
      <label htmlFor={tipo}>{label}</label>
      <select name={tipo} 
              id={tipo} 
              defaultValue={0} 
              onChange={(e)=>setElementos({...elementos, [tipo]:isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value)})}>
        <option disabled value={0}>...</option>
        {datos.map((elemento, indice) => (<option key= {indice} value={elemento.factor}>{elemento.tipo}</option>))}
      </select>
    </>
  );
};
  
export default Opciones;