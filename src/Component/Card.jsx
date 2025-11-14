import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Card(props) {
    const [count,setCount] = useState(1);

    function handleAdd(){
        const cartlist = {
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: parseInt(count, 10),
            total: props.price * parseInt(count, 10)
        };
        if (typeof props.onAddToCart === 'function') {
            props.onAddToCart(cartlist);
        }
    }
    
  return (
    <>
        <div id={props.id} className="card-container">
            <img src={props.img} alt="food image" />
            <h3>Item : {props.name}</h3>
            <h4>Price : ₹ {props.price}</h4>
            <button onClick={handleAdd}>Add to Cart</button>
            <input
                type="number"
                min="1"
                value={count}
                onChange={(e) => setCount(Number(e.target.value) || 1)}
            />
            <p>Total Price : ₹ {props.price * (Number(count) || 1)}</p>
        </div>
    </>
  )
}

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  onAddToCart: PropTypes.func,
}

export default Card
