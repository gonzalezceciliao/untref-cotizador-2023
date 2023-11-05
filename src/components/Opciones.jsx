import React from 'react'
const Opciones = ({ datos, label, tipo }) => {
    return (
      <>
        <label htmlFor={tipo}>{label}</label>
        <select name={tipo} id={tipo} defaultValue={0}>
          <option disabled value={0}>...</option>
          {datos.map((elemento) => (<option value={elemento.value}>{elemento.name}</option>))};
        </select>
      </>
    );
  };
  

export default Opciones;