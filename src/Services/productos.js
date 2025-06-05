import { collection, getDocs} from 'firebase/firestore'
import database from '../config/firebase'

export const getProducts = async () =>{
    try{
        const productos_collection_reference = collection(database, 'productos')
        const result = await getDocs(productos_collection_reference)

        const lista_formateada = result.docs.map((document) => {
            return {
                id: document.id,
                ...document.data()
            }
        })

        return lista_formateada
    }
    catch(error){
        console.error('Error al obtener productos:', error)
        return null
    }
}

export const getProductById = async ({id}) => {
    const  products = await getProducts()
    return products.find(product => product.id == id)

}