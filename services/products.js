import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'
import { db } from '@/firebase/config'
// import  productos  from '../assets/mock.json'

export const getProducts = async (id = null, category) => {
    const productsCollection = collection(db, 'products')
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
    }

export const getAllCategories = async () => {
    const productsCollection = collection(db, 'categories')
    const snapshot = await getDocs(productsCollection)
    const data = snapshot.docs.map(doc => doc.data())
    return data
}

// export const loadProducts = () => {
//     const tuki = collection(db, 'products')
//     productos.map(producto => addDoc(tuki, producto))
//     alert('Productos cargados')
// } 
//Funcion para cargar los productos de mock.json en Firebase