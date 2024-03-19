import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Briyani', price: 10, quantity: 1 },
    { id: 2, name: 'Noodles', price: 15, quantity: 1 }
  ]);

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-semibold text-blue-600">{item.name} - ${item.price}</p>
                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
              <div className="flex items-center">
                <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 text-gray-700">-</button>
                <span className="px-2">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 text-gray-700">+</button>
              </div>
            </div>
          ))}
          <p className="mt-4 text-lg font-bold text-blue-600">Total: ${calculateTotal()}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;


