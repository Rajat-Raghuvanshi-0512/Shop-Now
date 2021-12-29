import React, { useState, createContext, useEffect, useReducer } from 'react'
import App from '../App';
import { reducer } from '../Reducer/Reducer';

const Context = createContext();

const LoaderState = () => {

    const [products, setProducts] = useState([])
    const [progress, setProgress] = useState(0);

    const initialState = {
        items: [],
        totalItems: 0,
        totalAmount: 0.0,
        shipping: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const api = async () => {
        const res = await fetch(`https://fakestoreapi.com/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        api()
        dispatch({
            type: "GET_TOTAL"
        })
        // eslint-disable-next-line
    }, [state.items])

    // Reducer Functions
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    }
    const addItem = (CartItem) => {
        return dispatch({
            type: "ADD_ITEM",
            payload: CartItem
        })
    }
    const clearCart = () => {
        return dispatch({
            type: "CLEAR_CART"
        })
    }
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id
        })
    }
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id
        })
    }
    const discount = () => {
        return dispatch({
            type: "DISCOUNT"
        })
    }
    return (

        <>
            <Context.Provider value={{ ...state, products, setProducts, removeItem, addItem, clearCart, decrement, increment, discount, progress, setProgress }}>
                <App />
            </Context.Provider>
        </>
    )
}

export { LoaderState }
export default Context;