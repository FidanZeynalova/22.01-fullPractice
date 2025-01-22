import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { BsBasket3Fill } from "react-icons/bs";
import { useGetDataQuery } from '../app/slices/ShopSlices';
import { NavLink } from 'react-router'
import { WishlistContext } from '../context/WishlistContext';
import { BasketContext } from '../context/BasketContext';
import Swal from 'sweetalert2'

function Clothes() {
    let { data, isLoading, refetch } = useGetDataQuery()
    let { fav, setFav } = useContext(WishlistContext)
    let { basket, setBasket } = useContext(BasketContext)
    let [allData, setAllData] = useState([])

    useEffect(() => {
        if (data && !isLoading) {
            setAllData(data)
        }
    }, [data, isLoading])


    function handleSearch(inpValue) {
        if (inpValue.trim() == '') {
            setAllData(data)
        } else {
            let filter = data.filter((wish) => wish.name.toLowerCase().includes(inpValue.trim()))
            setAllData(filter)
        }
    }
    function handleFav(item) {
        let find = fav.find((wish) => wish._id == item._id)
        if (find) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${item.name} daha öncədən əlavə olunub!`
            });

        } else {
            setFav([...fav, item])
        }
    }
    function handleBasket(item) {
        let find = basket.find((wish) => wish._id == item._id)
        if (find) {
            find.count++
            setBasket([...basket])
        } else {
            setBasket([...basket, { ...item, count: 1 }])
        }
    }

    function handleSort(sortValue) {
        let sortedValue = [...allData]
        switch (sortValue) {
            case "default":
                sortedValue = [...data]
                break;
            case "az":
                sortedValue.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "za":
                sortedValue.sort((a, b) => b.name.localeCompare(a.name))
                break;
            case "expensive":
                sortedValue.sort((a, b) => b.price - a.price)
                break;
            case "cheap":
                sortedValue.sort((a, b) => a.price - b.price)
                break;
            default:
                break;
        }
        setAllData(sortedValue)
    }

    return (
        <div className='Clothes'>
            <div className="container">
                <h1>New realeased Products for Women</h1>
                <span>Who are in extremely love with eco friendly system.</span>
                <div className="sort-search">
                    <div className="search">
                        <input type="text" placeholder='Search...' onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <div className="sort">
                        <select onChange={(e) => handleSort(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                            <option value="cheap">Cheap</option>
                            <option value="expensive">Expensive</option>
                        </select>
                    </div>
                </div>
                <div className="card-wrapper">
                    {
                        isLoading ? (
                            <h1>...Loading</h1>
                        ) : allData.length == 0 ? (
                            <h1>Data Yoxdur</h1>
                        ) : (
                            allData.map((item) => (
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
                                            <button onClick={() => handleFav(item)}><AiOutlineLike /></button>
                                            <button><NavLink to={`${item._id}`} style={{ color: "black" }}><FaInfoCircle /></NavLink></button>
                                            <button onClick={() => handleBasket(item)}><BsBasket3Fill /></button>
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

export default Clothes
