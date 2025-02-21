import { addDoc, collection } from "firebase/firestore"

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
            text: 'Algo salió mal',
        })
    }
}