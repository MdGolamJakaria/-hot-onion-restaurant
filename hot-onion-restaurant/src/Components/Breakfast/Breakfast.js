import React from 'react';
import Product from '../Product/Product';

const Breakfast = (props) => {
    console.log(props);
    return (
        <div className='container'>
            <h1>This is Breakfast Foods Area</h1>
            <Product></Product>

        </div>
    );
};

export default Breakfast;