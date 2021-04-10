import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Cart = () => {
    const { cartData } = useContext(UserContext);
    const [cart, setCart] = cartData;

    console.log(cart.length)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = (total + product.price * product.quantity || 1);
    }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const { number } = useContext(UserContext);
    const [num, setNum] = number;
    // console.log(num)
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <div>
            <h1>Total: {formatNumber(total*num)}</h1>
        </div>
    );
};

export default Cart;