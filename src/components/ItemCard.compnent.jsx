import React from 'react';
import basketImg from '../assets/images/panier.jpg';

const ItemCard = ({ item, onAddItem }) => {

    return (
        <div className='item-wrapper'>
            <div className="item-info">
                <p>{item.name}</p>
                <span>{item.description}</span>
            </div>
            <div className="item-meta">
                <span className="item-weight">{item.weight}</span>
                <img src={item.image} alt="Produit" className='item-photo' />
                <div className="stock-display">
                    <p>qte</p>
                    <span className="stock-count">{item.stock}</span>
                </div>
                <p className="item-price">{item.price}€</p>
                <img src={basketImg} alt="Ajouter au panier" className='add-btn' onClick={() => onAddItem(item)} />
            </div>
        </div>
    );
};

export default ItemCard;