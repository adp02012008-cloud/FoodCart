import React from "react";
import "./Cart.css";

function Cart({ cartItems }) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + parseInt(item.total),
    0
  );

  return (
    <div className="cart-section">
      <h2>Selected Items</h2>
      <div className="cart-items-container">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <div className="cart-items-grid">
              {cartItems.map((item, index) => (
                <div key={item.id + "-" + index} className="cart-item-card">
                  <h3>Item : {item.name}</h3>
                  <h4>Price : ₹{item.price}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Item Total: ₹{item.total}</p>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Cart Total: ₹{totalAmount}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
