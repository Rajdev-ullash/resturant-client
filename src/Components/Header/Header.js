import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const { cartData } = useContext(UserContext);
    const [cart, setCart] = cartData;
    console.log(cart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Foodies.com</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto me-5 pe-5">
                        <Link className="nav-link me-5 active" aria-current="page" to="/home">Home</Link>
                        
                        <Link className="nav-link me-5" to="/cart"><i className="fas fa-cart-plus">Cart({cart.length})</i></Link>
                        <Link className="nav-link me-5" to="/admin">Admin</Link>
                        <Link className="nav-link me-5" to="/login">Login</Link>
                        {/* <Link className="nav-link me-5"><h1>total: {cart.length}</h1></Link> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;