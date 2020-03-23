import React, { useState } from 'react';
import Products from '../../fakedata/fakedata'
import Breakfast from '../Breakfast/Breakfast';
const Product = () => {

    const [products, setProducts]=useState(Products);
   
    const [cart, setCart]=useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className='container'>
            {
                Products.map( product=><Breakfast handleAddProduct={handleAddProduct} products={product}></Breakfast>)
            }

            <h1>This is Product Area</h1>
        </div>
    );
};

export default Product;