import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='container banner-area d-flex justify-content-center align-items-center'>
                <div>
                    <div className='banner-text row '>
                        <h2>Best food waiting for you belly</h2>
                    </div>
                    <div className="search-area row">
                        <input type="search" name="" id="" placeholder='Search food items'/>
                        <button>Search</button>
                    </div>
                </div>
        </div>
    );
};

export default Banner;