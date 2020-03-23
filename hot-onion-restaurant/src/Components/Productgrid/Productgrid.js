import React from 'react';
import './Productgrid.css';
const Productgrid = () => {
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <div className='foods-catagory'>
                    <a href="/breakfast">Breakfast</a>
                    <a href="/lunch">Lunch</a>
                    <a href="/dinner">Dinner</a>
                </div>
            </div>
        </div>
    );
};

export default Productgrid;