import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext()

function WishlistContextProvider({ children }) {
    let local = JSON.parse(localStorage.getItem("favorites"))
    let [fav, setFav] = useState(local ? local : [])

    useEffect(() => {

        localStorage.setItem("favorites", JSON.stringify(fav))

    }, [fav])

    const value = {
        fav, setFav
    }
    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistContextProvider
