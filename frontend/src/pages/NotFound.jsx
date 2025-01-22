import React from 'react'
import { Helmet } from 'react-helmet'

function NotFound() {
  return (
    <div>
    <Helmet>
    <title>Error Page</title>
    </Helmet>
  <h1 style={{margin:"350px auto",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"110px"}}>Error✔</h1>
</div>
  )
}

export default NotFound
