import React from 'react';

const Cart = (props) => {
    let total = 0;
    let shipping = 0;
    let grandTotal = 0;
    for (let i = 0; i < props.cart.length; i++) {
        let  cartItem = props.cart[i];
        total += cartItem.price;   
        shipping += cartItem.shipping;
        grandTotal = total + shipping;
    }
    return (
        <div>
            <h3>Order Summary :{props.cart.length}</h3>
            <br/>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Price: {total.toFixed(2)}</p>
            <h5>Total: {grandTotal.toFixed(2)}</h5>
            <p></p>         
        </div>
    );
};

export default Cart;