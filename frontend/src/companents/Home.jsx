import React from 'react'

function Home() {
  return (
    <div className='Home'>
      <div className="container">
        <div className="image">
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
        </div>
        <div className="content">
          <span>Flat <span style={{fontSize:"60px",fontWeight:"bold"}}> 75%Off</span></span>
          <h1>IT’S HAPPENING
            THIS SEASON!</h1>
          <button>Purchase Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home
