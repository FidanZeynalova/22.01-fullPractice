import React from 'react'
import Navbar from '../companents/Navbar'
import { Outlet } from "react-router"
import Footer from '../companents/Footer'

function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
