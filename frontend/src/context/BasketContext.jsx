import React, { createContext, useEffect, useState } from 'react'

export const BasketContext = createContext()

function BasketContextProvider({ children }) {
    let local = JSON.parse(localStorage.getItem("basket"))
    let [basket, setBasket] = useState(local ? local : [])

    useEffect(() => {

        localStorage.setItem("basket", JSON.stringify(basket))

    }, [basket])

    let value = {
        basket, setBasket
    }
    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider
