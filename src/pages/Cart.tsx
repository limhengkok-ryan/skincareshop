import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  if (!context) return null;
  const { cart, removeFromCart, updateQuantity } = context;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-earth-text">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-secondary mb-6">Your cart is empty.</p>
          <button 
            onClick={() => navigate('/products')} 
            className="bg-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.name} className="flex items-center justify-between border-b pb-6">
              <div className="flex items-center gap-6">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg shadow-sm" />
                <div>
                  <h3 className="font-bold text-lg text-on-surface">{item.name}</h3>
                  <p className="text-secondary mb-2">$${item.price.toFixed(2)} each</p>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.name)}
                      className="ml-4 text-error hover:underline flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                      <span className="text-sm font-medium">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-xl">$${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-8 border-t-2">
            <span className="text-2xl font-bold">Total Amount</span>
            <span className="text-2xl font-bold text-primary">$${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg mt-8 hover:opacity-90 shadow-deep transition-all">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
