
import React from 'react';
import trashImg from '../assets/images/poubelle.jpg';

function CartEntry({ item, qty, onChange, onRemove }) {

    const handleChange = (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;
        if (val > item.stock) val = item.stock;
        onChange(val);
    };

    return (
        <div className='cart-row'>
            <p>{item.name}</p>
            <img src={item.image} alt="Produit dans le panier" />
            <input type="number" value={qty} max={item.stock} min={1} onChange={handleChange} />
            <img src={trashImg} className='trash-icon' alt="Retirer" onClick={onRemove} />
        </div>
    );
}

export default CartEntry;