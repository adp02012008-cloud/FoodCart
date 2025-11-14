import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../Component/Card.jsx'
import Cart from '../Component/Cart.jsx'
import image1 from '../assets/item1.jpeg'
import image2 from '../assets/item2.jpeg'
import image3 from '../assets/item3.jpeg'
import image4 from '../assets/item4.jpeg'
import './Home.css'

function Home() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    return (
        <div className="home-container">
            <h1>Food Cart</h1>
            <div className="food-items-grid">
                <Card id="1" img={image1} name="Pizza" price={299} onAddToCart={handleAddToCart}/>
                <Card id="2" img={image2} name="Butter Chicken" price={399} onAddToCart={handleAddToCart}/>
                <Card id="3" img={image3} name="Chole Bhature" price={199} onAddToCart={handleAddToCart}/>
                <Card id="4" img={image4} name="Spaghetti Bolognese" price={249} onAddToCart={handleAddToCart}/>
            </div>
            
            <Cart cartItems={cartItems} />

            {cartItems.length > 0 && (
                <div className="checkout-section">
                    <button className="checkout-button" onClick={() => navigate('/sucess')}>
                        Proceed to Checkout
                    </button>
                </div>
            )}

        </div>
    );
}

export default Home
