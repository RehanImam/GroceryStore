

// function Cart() {
//   return (
//     <div>
//        Cart
//     </div>
//   );
// }

// export default Cart;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight, FaTicketAlt } from "react-icons/fa";

function Cart() {
  // 1. Setup the initial items in the basket
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Organic Tomatoes", price: 40, qty: 2, img: "https://images.unsplash.com/photo-1582284527214-2da079555ca2?q=80&w=100" },
    { id: 2, name: "Fresh Spinach", price: 30, qty: 1, img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=100" },
    { id: 3, name: "Red Onions", price: 60, qty: 1, img: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=100" },
  ]);

  // 2. Logic to delete an item (This fixes the 'setCartItems' warning)
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // 3. Calculation Logic
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryFee = cartItems.length > 0 ? 20 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">
      <div className="cart-container">
        
        {/* LEFT SIDE: The List of Vegetables */}
        <div className="cart-main">
          <div className="cart-header-row">
            <h1>Your Basket <span className="item-count">({cartItems.length} items)</span></h1>
            <Link to="/" className="continue-shopping">Add more items</Link>
          </div>

          {cartItems.length > 0 ? (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div className="cart-item-card" key={item.id}>
                  <img src={item.img} alt={item.name} className="item-img" />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-price-unit">₹{item.price} / kg</p>
                  </div>
                  <div className="qty-controls">
                    <button className="qty-btn"><FaMinus /></button>
                    <span className="qty-val">{item.qty}</span>
                    <button className="qty-btn"><FaPlus /></button>
                  </div>
                  <div className="item-total-price">
                    ₹{item.price * item.qty}
                  </div>
                  {/* Clicking this now works! */}
                  <button className="remove-item" onClick={() => removeItem(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-cart-state">
              <FaShoppingBag className="empty-icon" />
              <h2>Your basket is empty</h2>
              <p>Looks like you haven't added any fresh veggies yet.</p>
              <Link to="/" className="shop-now-btn">Start Shopping</Link>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: The Bill Summary */}
        <aside className="cart-summary">
          <div className="coupon-section">
            <FaTicketAlt className="coupon-icon" />
            <input type="text" placeholder="Promo Code" />
            <button className="apply-btn">Apply</button>
          </div>

          <div className="bill-details">
            <h3>Bill Details</h3>
            <div className="bill-row">
              <span>Item Total</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="bill-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="bill-divider"></div>
            <div className="bill-row grand-total">
              <span>To Pay</span>
              <span>₹{total}</span>
            </div>
          </div>

          <Link to="/contact" className="checkout-btn">
            Checkout Summary <FaArrowRight />
          </Link>
          <p className="footer-note">Secure checkout via Call/WhatsApp</p>
        </aside>

      </div>
    </div>
  );
}

export default Cart;