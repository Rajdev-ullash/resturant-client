import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Cart from '../Cart/Cart';
import FoodShow from '../FoodShow/FoodShow'

const Order = () => {
    const { cartData } = useContext(UserContext);
    const [cart, setCart] = cartData;
    console.log(cart)
    // const getTotal = () => {
    //     return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
    // }


    return (
        <div>
            <h1>this is order page</h1>
            <div className="container">
                <div className="row">
                    {
                        cart.map(carts => <FoodShow carts={carts}></FoodShow>)
                    }
                </div>
                <div>
                    <Cart carts={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;