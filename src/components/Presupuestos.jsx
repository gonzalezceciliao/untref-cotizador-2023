import React from 'react';
import { Link } from 'react-router-dom';
import { FaHouse } from 'react-icons/fa6';
import usePresupuestos from '../hooks/usePresupuestos';
import Presupuesto from './Presupuesto';


const Presupuestos =() => {
  const { Presupuestos } = usePresupuestos();
  return (
    <>
      <h2>Historial  de presupuestos</h2>
      <nav>
        <Link to={'/'}>
          <FaHouse />
        </Link>
      </nav>
      <ul>{Presupuestos.map((elemento,indice) => <Presupuesto key={indice} {...elemento}/>)}</ul>
    </>
  )
};
  export {Presupuestos};