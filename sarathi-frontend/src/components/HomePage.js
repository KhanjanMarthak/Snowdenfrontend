import React from 'react';
import './HomePage.css';
import mainlogo from '../assets/sarathi.png';
import particlesConfig from '../config/partical-config';
// import Particles from 'react-particles-js';




function Homepage() {
    return (
        <div>
            <div className='nav_container'>
                <div className='navbar-brand'> <img className='mainlogo' src={mainlogo} alt='sarthik' /> Sarthik</div>
                <div className='nav_mid_iteams'>
                    <div className=''>HOME</div>
                    <div>ABOUT</div>
                    <div>TEAM</div>
                    <div>SERVICES</div>
                </div>
                <div><button className='btn btn-outline-dark login_btn'>LOGIN</button></div>
            </div>

            <div>
                <div className='map_container'>
                    <div className='signup_button'>
                        <button className='btn-secondary text-light btn-outline-dark'>SIGN UP As Vendor</button>
                        <button className='btn-secondary text-light btn-outline-dark'>SIGN UP As Customer</button>
                    </div>
                </div>

            </div>

            <div className='nav_container'>
                <div className='navbar-brand'> <img className='mainlogo' src={mainlogo} alt='sarthik' /> Sarthik</div>
                <div className='nav_mid_iteams'>
                    <div className=''>HOME</div>
                    <div>ABOUT</div>
                    <div>TEAM</div>
                    <div>SERVICES</div>
                </div>
                <div><button className='btn btn-outline-dark login_btn'>LOGIN</button></div>
            </div>
        </div>
    )
}

export default Homepage