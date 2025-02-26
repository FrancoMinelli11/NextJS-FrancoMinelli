import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/config"
import Swal from "sweetalert2"

export const LoadCart = async (order) => {
    try{
    const ordersCollection = collection(db, 'orders')
    await addDoc(ordersCollection, order)
    }
    catch (error) {
        return Swal.fire({
            toast: true,
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo conectar con la base de datos',
        })
    }
}