import React, { useEffect, useState } from 'react'
import Producto from './Producto'
import { getProducts } from '../Services/productos'

function ListaProductos() {
  const [products, setProducts] = useState([])

  const getProductsList = async () => {
      const products_list_response = await getProducts()
      if (products_list_response) {
          setProducts(products_list_response)
      }
  }

  useEffect(() => {getProductsList()},[])


  const componentes = products.map(
    (product) => {
        return <Producto
            {...product}
            key={product.id} />
    }
)

  return (
    <>
        {componentes}
    </>
  )
}

export default ListaProductos