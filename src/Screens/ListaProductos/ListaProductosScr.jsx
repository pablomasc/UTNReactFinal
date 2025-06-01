import React from 'react'
import ListaProductos from '../../Components/ListaProductos.jsx'
import './ListaProductosScr.css'

function ListaProductosScr() {
  return (
    <>
      <h3>Productos</h3>
      <div className='contenedorProductos'>
        <ListaProductos />
      </div>
    </>
  )
}

export default ListaProductosScr