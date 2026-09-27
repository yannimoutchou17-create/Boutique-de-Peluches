import React from 'react';
import '../assets/style/cart-panel.css';
import CartEntry from './CartEntry.component.jsx';

const CartPanel = ({ items, onRemoveItem, onUpdateQty, grandTotal, totalGrams }) => {

    return (
        <div className='side-cart'>
            <span className='weight-summary'>Poids total : {totalGrams}g</span>
            <p>Mon panier</p>
            {items.map((item) => (
                <CartEntry key={item.id} item={item} qty={item.qty} onChange={(newQty) => onUpdateQty(item.id, newQty)} onRemove={() => onRemoveItem(item)}
                />
            ))}
            <div className="total-box">
                <span>Total : </span><p>{grandTotal} €</p>
            </div>
        </div>
    );
};

export default CartPanel;
