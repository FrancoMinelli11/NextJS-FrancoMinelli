'use client'
import { createContext, useState} from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartState, setCartState] = useState([])
    const addItem = (item, qtyItem) => {
        const existingProduct = item.title && cartState.find(product => product.title === item.title)
        const availableStock = item.stock - (existingProduct ? existingProduct.quantity : 0)
        if(qtyItem > availableStock) {
            Swal.fire({
                toast: true,
                icon: 'error',
                title: 'Oops...',
                text: 'No hay stock suficiente',
                allowOutsideClick: false
            })
            return
        }
        if(existingProduct) {
            setCartState(cartState.map(product => product.title === item.title ? {...product, quantity: product.quantity + qtyItem} : product))
        }else{
            setCartState([...cartState, {...item, quantity: qtyItem}])
        }
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            icon: 'success',
            title: 'Agregado al carrito',
            text: 'Producto agregado con éxito'
        })
    }
    const removeItem = (item) => {
        setCartState(cartState.filter(product => product.title !== item.title))
    }
    const clearCart = () => {
        setCartState([])
    }
    const cartTotal = () => {
        return cartState.reduce((total, product) => total + product.price * product.quantity, 0);
    }
    return (
        <CartContext.Provider value={{cartState, addItem, removeItem, clearCart, cartTotal}}>{children}</CartContext.Provider>
    )
}

