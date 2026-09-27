import React from 'react';
import '../assets/style/searchbar.css';


const SearchBar = ({ onSearch }) => {

    const handleInput = (e) => {
        onSearch(e.target.value);
    };
    return (
        <div className="topbar">
            <div className="brand">
                <p>Boutique</p>
            </div>
            <div className="search-field">
                <input type="text" placeholder="Rechercher un produit" onChange={handleInput} />
            </div>
        </div>
    );
};

export default SearchBar;
