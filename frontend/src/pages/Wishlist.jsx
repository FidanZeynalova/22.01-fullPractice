import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { WishlistContext } from '../context/WishlistContext'
import { BsBasket3Fill } from 'react-icons/bs'
import { FaInfoCircle } from 'react-icons/fa'
import { NavLink } from 'react-router'
import { AiOutlineDislike } from 'react-icons/ai'
import { useGetDataQuery } from '../app/slices/ShopSlices'

function Wishlist() {
    let { isLoading } = useGetDataQuery
    let { fav, setFav } = useContext(WishlistContext)

    function handleDelete(item) {
        let filter = fav.filter((shop) => shop._id != item._id)
        setFav(filter)
    }
    return (
        <div>
            <Helmet>
                <title>Wishlist Page</title>
            </Helmet>
            <div className="Wishlist">
                <h1>Wishlist Cards</h1>
                <div className="card-wrapper">
                    {
                        isLoading ? (
                            <h1>...Loading</h1>
                        ) : fav.length == 0 ? (
                            <button><NavLink to={"/"} style={{ color: "black", backgroundColor: "rgba(100, 100, 111, 0.2", padding: "15px", fontSize: "20px", borderRadius: "10px" }}>Go Shopping</NavLink></button>
                        ) : (
                            fav.map((item) => (
                                <div className="card" key={item._id}>
                                    <div className="image">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="text">
                                        <div className="info">
                                            <h3>{item.name}</h3>
                                            <h2>${item.price}</h2>
                                        </div>
                                        <div className="btns">
                                            <button onClick={() => handleDelete(item)}><AiOutlineDislike /></button>
                                            <button><FaInfoCircle /></button>
                                            <button><BsBasket3Fill /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Wishlist
