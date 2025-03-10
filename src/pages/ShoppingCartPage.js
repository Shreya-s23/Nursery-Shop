import React from 'react';
import './Cart.css';

const Cart = ({ cart = [], setCart }) => {
  // Calculate total products and amount
  const totalAmount = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const totalProducts = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  // Increase quantity of an item
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity of an item (remove if quantity becomes 0)
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  // Remove an item from the cart
  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Placeholder checkout function
  const handleCheckout = () => {
    alert('Checkout Coming Soon!');
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity || 1}</p>
              <p>Total: ₹{item.price * (item.quantity || 1)}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>
                -
              </button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total Products: {totalProducts}</h3>
          <h3>Total Amount: ₹{totalAmount}</h3>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={() => (window.location.href = '/products')}>
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
