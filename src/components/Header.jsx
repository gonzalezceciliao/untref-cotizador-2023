import React from 'react'
import Historial from "../Historial";

const Header = () => {
  return (
    <>
        <br /><h1>Seguros del Hogar 🏡</h1><br />
        <Form/>
         <br /> <br /> <Link to={"historial"}>
         <button id="historial" className="btn-dark">
                <span>Ver historial 📋</span>
            </button>
        </Link>
    </>
  )
}

export default Header;