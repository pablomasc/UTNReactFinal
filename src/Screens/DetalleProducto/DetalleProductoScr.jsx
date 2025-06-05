import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../Services/productos'
import './DetalleProductoScr.css'

function DetalleProductoScr() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

   const getProductDetail = async () => {
                  const product_detail_response = await getProductById({id})
                  if (product_detail_response) {
                      setProduct(product_detail_response)
                  }
              }

  useEffect(() => {
    getProductDetail()
  }, [])

  // agregado de html al string 

  const descripcionBr = product?.descripcion.replace(/(\n)+/g, '<br /><br />');

  return (
    <>
    <div className='fondoDetalleProducto'>
      <div className='fondoDescripcionImagen'><img src={product?.imagen} alt={product?.nombre} className='imagenProductoGrande'/></div>
      <div className='fondoDescripcionTexto'>
        <h2>{product?.nombre}</h2>
        <p><div dangerouslySetInnerHTML={{ __html: descripcionBr}}></div></p>
        <div className='fondoComprar'>
          <div className='contenedorPrecio'><p className='precio'>${product?.precio}</p></div>
          <div className='contenedorBoton'><p><button>Comprar!</button></p></div>
        </div>
      </div>
    </div>
    <div className='opcionMenu'><Link to={'/'}>Volver</Link></div>
    </>

  )
}

export default DetalleProductoScr