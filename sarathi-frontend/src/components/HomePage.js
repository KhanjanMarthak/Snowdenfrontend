import React from 'react';
import './HomePage.css';




function Homepage() {
    return (
        <div>
            <div className='nav_container'>
                <div className='navbar-brand'>Sarthik Logo</div>
                <div className='nav_mid_iteams'>
                    <div className=''>HOME</div>
                    <div>ABOUT</div>
                    <div>TEAM</div>
                    <div>SERVICES</div>
                </div>
                <div><button className='btn btn-outline-dark'>LOGIN</button></div>
            </div>

            <div>
                <div className='map_container'>
                </div>
                <div className='signup_button'>
                    <button className='btn-secondary text-light btn-outline-dark'>SIGN UP As Vendor</button>
                    <button className='btn-secondary text-light btn-outline-dark'>SIGN UP As Customer</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage