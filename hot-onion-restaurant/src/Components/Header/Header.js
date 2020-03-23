import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "../Header/Header.css";
const Header = () => {
    return (
        <div>
            <header className='container'>
                <div className="row ">
                    <div className='col-6 logo'>
                        <img src={logo} alt=""/>
                    </div>
                    <div className="col-6 top-banner-area d-flex justify-content-end align-items-center">
                        <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}/>
                        <a className="login" href="#">login</a>
                        <a className="signin" href="#">signup</a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;