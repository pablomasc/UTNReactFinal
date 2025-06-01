import React from 'react'
import { Link } from 'react-router-dom'
import './Producto.css'

function Producto({id, nombre, imagen, precio}) {
  return (
    <div className='baseProducto'>
      <img src={imagen} alt={nombre} className='imagenProductoChica'/>
      <p><Link to={`/producto/${id}`}>{nombre}</Link></p><p>${precio}</p>
    </div>
  )
}

export default Producto