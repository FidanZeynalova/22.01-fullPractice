import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { AiOutlineLike } from 'react-icons/ai'
import { BsBasket3Fill } from 'react-icons/bs'
import { RiArrowGoBackFill } from "react-icons/ri";
import { NavLink, useParams } from 'react-router'
import { useGetDataByIdQuery } from '../app/slices/ShopSlices'
import { WishlistContext } from '../context/WishlistContext';

function Detail() {
  let { id } = useParams()
  let { data, isLoading } = useGetDataByIdQuery(id)

  return (
    <div>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      <div className="Detail">
        <h1>Card Detail</h1>
        {
          isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="card" >
              <div className="image">
                <img src={data.img} alt="" />
              </div>
              <div className="text">
                <div className="info">
                  <h3>{data.name}</h3>
                  <h2>${data.price}</h2>
                </div>
                <div className="btns">
                  <button ><AiOutlineLike /></button>
                  <button><NavLink to={`/`} style={{ color: "black" }}><RiArrowGoBackFill /></NavLink></button>
                  <button><BsBasket3Fill /></button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Detail
