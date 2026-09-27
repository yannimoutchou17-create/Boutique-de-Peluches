import React, { useState } from 'react';
import Catalog from './Catalog.component.jsx';
import CartPanel from './CartPanel.component.jsx';
import '../assets/style/main.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems(prev => {
      const found = prev.find(i => i.id === item.id);
      if (found) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, qty: Math.min(i.qty + 1, i.stock) }
            : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (itemId, newQty) => {
    setCartItems(prev =>
      prev.map(i => i.id === itemId ? { ...i, qty: newQty } : i)
    );
  };

  const grandTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalGrams = cartItems.reduce((sum, i) => sum + i.weight * i.qty, 0);

  const removeItem = (item) => {
    setCartItems(prev => prev.filter(i => i.id !== item.id));
  };

  return (
    <div className="store-layout">
      <Catalog onAddItem={addItem} cartItems={cartItems} />
      <CartPanel items={cartItems} onRemoveItem={removeItem} onUpdateQty={updateQty} grandTotal={grandTotal} totalGrams={totalGrams} />
    </div>
  );
}
export default App;
