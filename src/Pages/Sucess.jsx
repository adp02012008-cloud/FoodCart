import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sucess() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Order Placed Successfully!</h1>
        <h2>Thank you for shopping with us.</h2>
        <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default Sucess
