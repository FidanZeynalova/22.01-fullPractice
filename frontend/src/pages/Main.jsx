import React from 'react'
import { Helmet } from 'react-helmet'
import Home from '../companents/Home'
import Clothes from '../companents/Clothes'
import Categories from '../companents/Categories'
import Products from '../companents/Products'
import Searched from '../companents/Searched'

function Main() {
    return (
        <div>
            <Helmet>
                <title>Shop Page</title>
            </Helmet>
            <Home />
            <Categories/>
            <Products/>
            <Clothes/>
            <Searched/>
        </div>
    )
}

export default Main
