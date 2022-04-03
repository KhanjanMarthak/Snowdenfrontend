import React from 'react';
import './HomePage.css';
import mainlogo from '../assets/sarathi.png';
import { useNavigate } from "react-router-dom";
import ParticlesConfig from '../config/ParticlesConfig';
import mymap from '../assets/map.png'

function Homepage() {
    let navigate = useNavigate();
    const loginHandler = () => {
        navigate('/login');
    }
    const signupHandlerVendor = () => {
        navigate('/signup/vendor');
    }
    const signupHandlerCustomer = () => {
        navigate('/signup/user');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light myzindex">
                <span className="navbar-brand"><img className='mainlogo' src={mainlogo} alt='sarthi' /> Sarthi</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <div><span></span></div>
                    <div>
                        <ul className="navbar-nav mr-auto justid">
                            <li className="nav-item active">
                                <span className="nav-link">HOME</span>
                            </li>
                            <li className="nav-item active">
                                <span className="nav-link">ABOUT</span>
                            </li>
                            <li className="nav-item active">
                                <span className="nav-link">TEAM</span>
                            </li>
                            <li className="nav-item active">
                                <span className="nav-link">SERVICES</span>
                            </li>
                        </ul>
                    </div>
                    <div className="form-inline my-2 my-lg-0">
                        <button className='btn-signup' type="submit" onClick={loginHandler}>LOGIN</button>
                    </div>
                </div>
            </nav>
            <div>
                <div>
                    <div className='map_container'>
                        <ParticlesConfig id="tsparticles" />
                        <img className='mymap' src={mymap} alt='sarthi'>
                        </img>
                        <div className='signup_button'>
                            <button className='btn-signup' onClick={signupHandlerVendor}>SIGN UP As Vendor</button>
                            <button className='btn-signup' onClick={signupHandlerCustomer}>SIGN UP As Customer</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Homepage;