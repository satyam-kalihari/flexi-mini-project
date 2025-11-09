import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert("Your order has been placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <Layout>
      <section id="checkout" className="checkout">
        <div className="container">
          <div className="section-title">
            <h2>Checkout</h2>
          </div>
          <div className="checkout-content">
            <div className="checkout-form">
              <form id="checkout-form" onSubmit={handleCheckout}>
                <h3>Billing Details</h3>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Address" required />
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="State" required />
                <input type="text" placeholder="Zip Code" required />

                <h3>Payment Information</h3>
                <input type="text" placeholder="Name on Card" required />
                <input type="text" placeholder="Card Number" required />
                <input type="text" placeholder="Expiration Date (MM/YY)" required />
                <input type="text" placeholder="CVV" required />
                
                <button type="submit" className="btn">Place Order</button>
              </form>
            </div>
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div id="summary-items">
                {cart.map(item => (
                  <div className="summary-item" key={item.id}>
                    <p>{item.name} x {item.quantity} <span>${(item.price * item.quantity).toFixed(2)}</span></p>
                  </div>
                ))}
              </div>
              <div className="summary-total">
                <h3>Total: $<span id="summary-total">{total.toFixed(2)}</span></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
