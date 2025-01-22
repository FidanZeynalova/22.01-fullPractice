import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { FaDeleteLeft, FaMinus, FaPlus } from 'react-icons/fa6'
import { BasketContext } from '../context/BasketContext'
import { useGetDataQuery } from '../app/slices/ShopSlices'
import { NavLink } from 'react-router'

function Basket() {
    let { basket, setBasket } = useContext(BasketContext)
    let { isLoading } = useGetDataQuery()

    function handleIncrease(item) {
        item.count++
        setBasket([...basket])

    }

    function handleDecrease(item) {
        if (item.count > 1) {
            item.count--
            setBasket([...basket])
        } else {
            let find = basket.filter((wish) => wish._id != item._id)
            setBasket(find)
        }
    }
    function handleDelete(item) {
        let find = basket.filter((wish) => wish._id != item._id)
        setBasket(find)
    }
    return (
        <div>
            <Helmet>
                <title>Basket Page</title>
            </Helmet>
            <div className="Basket">
                <div className="container">
                    <h1>Basket Card</h1>
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Increase</th>
                            <th>Total Price</th>
                            <th>Decrease</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                        {
                            isLoading ? (
                                <h1>Loading...</h1>
                            ) : basket.length == 0 ? (
                                <button style={{ marginTop: "40px" }}><NavLink style={{ color: "white" }} to={"/"} >Go Shopping</NavLink></button>
                            ) : (
                                basket.map((item) => (
                                    <tr key={item._id}>
                                        <td><img src={item.img} alt="" style={{ width: "150px", height: "150px" }} /></td>
                                        <td>{item.name}</td>
                                        <td><button onClick={() => handleIncrease(item)}><FaPlus /></button></td>
                                        <td>{item.price * item.count}</td>
                                        <td><button onClick={() => handleDecrease(item)}><FaMinus /></button></td>
                                        <td>{item.count}</td>
                                        <td>${item.price}</td>
                                        <td><button onClick={() => handleDelete(item)}><FaDeleteLeft /></button></td>
                                    </tr>
                                ))
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Basket
