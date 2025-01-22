import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { FaBars } from "react-icons/fa";
import { WishlistContext } from '../context/WishlistContext';
import { BasketContext } from '../context/BasketContext';

function Navbar() {
    let { fav } = useContext(WishlistContext)
    let { basket } = useContext(BasketContext)
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="logo">
                    <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
                </div>
                <div className="list">
                    <ul>
                        <li><NavLink to={"/"} style={({ isActive }) => { return isActive ? { color: "#F633B0" } : { color: "black" }; }} >Home</NavLink></li>
                        <li>Category</li>
                        <li><NavLink to={"/add"} style={({ isActive }) => { return isActive ? { color: "#F633B0" } : { color: "black" }; }} >Add</NavLink></li>
                        <li><NavLink to={"/wishlist"} style={({ isActive }) => { return isActive ? { color: "#F633B0" } : { color: "black" }; }} >Wishlist({fav.length})</NavLink></li>
                        <li><NavLink to={"/basket"} style={({ isActive }) => { return isActive ? { color: "#F633B0" } : { color: "black" }; }}  >Basket({basket.length})</NavLink></li>
                    </ul>
                    <div className="icon">
                        <FaBars />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
