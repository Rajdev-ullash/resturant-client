import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';


const FoodShow = ({carts}) => {

        
        // console.log(carts)

        const [update , setUpdate] = useState(carts)
        console.log(update)
        // const { cartData } = useContext(UserContext);
        // const [cart, setCart] = cartData;
        // const { number } = useContext(UserContext);
        //  const [num, setNum] = number;
         const {_id, imageURL, name, price, quantity} = carts;
        // useEffect(() => {
        //         setCart(num, ...cart)
        // }, [])
        // console.log(cart)
        // console.log(cart);
        // const [num, setNum] = useState(1)
        // console.log(num)
        const increment = (id) =>{
                if(_id === id){
                        // const newData = {...update}
                        // newData.quantity = quantity +1

                        // setUpdate(newData)
                //     setNum(num+1)
                carts.quantity++;
                console.log(typeof(id), id)
                console.log(typeof(carts.quantity), carts.quantity)
                console.log(typeof(carts._id), carts._id)
                }
                // console.log(id)
                // setNum(num + 1);
        }
        const decrement  = (id) =>{
                if(carts._id === id){
                //    setNum(num -1)
                carts.quantity--;
                }
                
        }
        // let total = 0;
        // for (let i = 0; i < cart.length; i++) {
        //         const product = cart[i];
        //         total = (total + product.price * product.quantity || 1);
        // }
        // const formatNumber = num => {
        //         const precision = num.toFixed(2);
        //         return Number(precision);
        //     }

        // const getTotal = () =>{
        //         return cart.reduce((sum, {price, quantity}) => sum +price* quantity, 0)
        // }

        return (
                <div className="col w-50 justify-content-center align-item-center d-flex">
                        <div className="cd d-flex">
                                <div>
                                        <img src={imageURL} style={{ width: "70px", height: "70px" }} className="img-fluid" alt="" />
                                </div>
                                <div>
                                        <h3>{name}</h3>
                                        <h6>Price: ${price}</h6>
                                        { update._id  && 
                                                <h1><button onClick={()=> increment(_id)} className="btn btn-primary">increase</button> {update.quantity} <button onClick={()=> decrement(_id)} className="btn btn-primary">decrease</button></h1>
                                        }
                                </div>
                        
                        </div>

                </div>

        );
};

export default FoodShow;