import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Layout from '../components/Layout';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Layout>
      <section id="cart" className="cart">
        <div className="container">
          <div className="section-title">
            <h2>Your Cart</h2>
          </div>
          <div id="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button className="remove-from-cart-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="cart-total">
              <h3>Total: $<span id="cart-total">{total.toFixed(2)}</span></h3>
              <Link to="/checkout" className="btn">Checkout</Link>
            </div>
          )}
          {cart.length === 0 && (
            <p>Your cart is empty.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
