import { collection, getDocs, getDoc, doc, query, where, addDoc, } from 'firebase/firestore'
import { db } from '@/firebase/config'
import Swal from 'sweetalert2'
//import  productos  from '../assets/mock.json'

export const getProducts = async (id = null, category) => {
try {    const productsCollection = collection(db, 'products')
    if (id){
        const itemDoc = doc(db, 'products', id)
        const snapshot = await getDoc(itemDoc)
        return snapshot.data()
    }
    const filter = category ? query(productsCollection,where('category', '==', category)) : null
    const snapshot = await getDocs(category ? filter : productsCollection)
    const data = snapshot.docs.map(doc => 
        {
            const id = doc.id
            const data = doc.data()
            data.id = id
            return data
        })
    return data
    } catch {
        return Swal.fire({
            toast: true,
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal',
        })
    }
}

export const getAllCategories = async () => {
    try{
        const productsCollection = collection(db, 'categories')
        const snapshot = await getDocs(productsCollection)
        const data = snapshot.docs.map(doc => doc.data())
        return data
}catch (error) {
    return Swal.fire({
        toast: true,
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal',
    })
}
}

{/*export const loadProducts = () => {
    const tuki = collection(db, 'products')
    productos.map(producto => addDoc(tuki, producto))
    alert('Productos cargados')
} */}
//Funcion para cargar los productos de mock.json en Firebase

export const LoadNewProduct = async (product) => {
    try{
        //product.id = documentId()
        const productsCollection = collection(db,'products')
        await addDoc(productsCollection, product)
        Swal.fire({
            toast: true,
            icon: 'success',
            title: 'Actualización terminada',
            text: 'Producto creado con éxito'
        })
    }catch{
        Swal.fire({
            toast: true,
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal'
        })
    }
}