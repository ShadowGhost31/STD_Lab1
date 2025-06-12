import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, image }) => (
    <div className="product-card">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
            <h2 className="product-title">{name}</h2>
            <p className="product-price">{price}</p>
            <button className="buy-button">Buy Now</button>
        </div>
    </div>
);

export default ProductCard;