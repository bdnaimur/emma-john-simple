import React, { useState } from 'react';
import fakeData from '../fakeData';
import Cart from './carts/Cart';
import Product from './products/Product';
import './shop.css'
const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);
    function clickAddHandle(product) {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(product, cart.length);
    }
    return (
        <div className="shop-container">
            <div className="shop-product">
                {products.map(product => <Product clickHandle={clickAddHandle} product={product}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;