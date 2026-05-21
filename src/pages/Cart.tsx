import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  if (!context) return null;
  const { cart } = context;

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
            <div key={item.name} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-secondary">Quantity: {item.quantity}</p>
                </div>
              </div>
              <p className="font-bold">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between items-center pt-6 border-t">
            <span className="text-2xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-primary">$${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg mt-8 hover:opacity-90 transition-opacity">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
