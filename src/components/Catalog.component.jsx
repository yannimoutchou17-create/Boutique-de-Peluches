import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.composant.jsx';
import '../assets/style/catalog.css';
import products from '../data/products.js';
import ItemCard from './ItemCard.compnent.jsx';

const Catalog = ({ onAddItem, cartItems }) => {
    const [allItems, setAllItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setAllItems(products);
    }, []);

    return (
        <div className='catalog-zone'>
            <SearchBar onSearch={(text) => setSearchTerm(text)} />
            <div className="items-grid">
                {allItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => {
                    const inCart = cartItems.find(i => i.id === item.id);
                    const currentStock = item.stock - (inCart ? inCart.qty : 0);
                    return (
                        <ItemCard key={item.id} item={{ ...item, stock: currentStock }} onAddItem={onAddItem} />
                    );
                })
                }
            </div>
        </div>
    );
};

export default Catalog;
