import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, seller, shipping, img, stock,} = props.product;
    const {clickHandle, product} = props
    return (
        <div className='product-container'>
            <div className="image">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="product-details">
                <div className="product-description">
                    <h4>{name}</h4>
                    <br />
                    <p><small>{seller}</small></p>
                    <p>{price}</p>
                    <p><small>Only {stock} left, grave soon</small></p>
                    <button onClick={()=>clickHandle(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;