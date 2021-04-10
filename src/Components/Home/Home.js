import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import { Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Home = () => {
    const { cartData } = useContext(UserContext);
    const [cart, setCart] = cartData;
    const [showMenu, setShowMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/showMenu')
            .then(res => res.json())
            .then(data => setShowMenu(data));
    }, [])

    const addToCart = (filterItem) => {
        let newCart = [...cart];
        let itemInCart = newCart.find((item) => filterItem.name === item.name);
        if (itemInCart) {
            itemInCart.quantity++;
        }
        else {
            itemInCart = {
                ...filterItem,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);

        // console.log('we are added in to cart')
        // setCart([...cart, filterItem])

    }
    return (
        <div>
            <div className="top-headings justify-content-center align-items-center d-flex">
                <div>
                    <h1>Best Food Waiting For Your Belly</h1>
                    <form className="d-flex mt-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form>
                </div>
            </div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="justify-content-center d-flex bg-warning">
                <Tab eventKey="home" title="BreakFast">
                    <div className="row">
                        {
                            showMenu.filter(items => items.category === 'BreakFast').map((filterItem, idx) => (
                                <div className="col-md-4 mt-3 d-flex justify-content-between" key={idx}>
                                    <div className="card bg-primary rounded" style={{ width: "18rem" }}>
                                        <img src={filterItem.imageURL} style={{ width: "300px", height: "300px" }} className="img-fluid card-img-top" alt="" />
                                        <div class="card-body text-white">
                                            <h5 className="card-title text-center">{filterItem.name}</h5>
                                            <h6>${filterItem.price}</h6>
                                            <div className="d-flex mt-3">
                                                <Link to={`/item/${filterItem._id}`} className="btn btn-warning ms-auto">Food Details</Link>
                                                <Link onClick={() => addToCart(filterItem)} className="btn btn-warning ms-auto">Add to Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Launch">
                    <div className="row">
                        {
                            showMenu.filter(items => items.category === 'Launch').map((filterItem, idx) => (
                                <div className="col-md-4 mt-3 d-flex justify-content-between" key={idx}>
                                    <div className="card bg-primary rounded" style={{ width: "18rem" }}>
                                        <img src={filterItem.imageURL} style={{ width: "300px", height: "300px" }} className="img-fluid card-img-top" alt="" />
                                        <div class="card-body text-white">
                                            <h5 className="card-title text-center">{filterItem.name}</h5>
                                            <h6>${filterItem.price}</h6>
                                            <div className="d-flex mt-3">
                                                <Link to={`/item/${filterItem._id}`} className="btn btn-warning ms-auto">Food Details</Link>
                                                <Link onClick={() => addToCart(filterItem)} className="btn btn-warning ms-auto">Add to Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Dinner">
                    <div className="row">
                        {
                            showMenu.filter(items => items.category === 'Dinner').map((filterItem, idx) => (
                                <div className="col-md-4 mt-3 d-flex justify-content-between" key={idx}>
                                    <div className="card bg-primary rounded" style={{ width: "18rem" }}>
                                        <img src={filterItem.imageURL} style={{ width: "300px", height: "300px" }} className="img-fluid card-img-top" alt="" />
                                        <div class="card-body text-white">
                                            <h5 className="card-title text-center">{filterItem.name}</h5>
                                            <h6>${filterItem.price}</h6>
                                            <div className="d-flex mt-3">
                                                <Link to={`/item/${filterItem._id}`} className="btn btn-warning ms-auto">Food Details</Link>
                                                <Link onClick={() => addToCart(filterItem)} className="btn btn-warning ms-auto">Add to Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Home;