import React from 'react';
import './HomePage.css';
import mainlogo from '../assets/sarathi.png';
import ParticlesConfig from '../config/ParticlesConfig';

function Homepage() {
    return (
        <div>
            {/* <div className='nav_container'>
                <div className='navbar-brand'> <img className='mainlogo' src={mainlogo} alt='sarthik' /> Sarthik</div>
                
                <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                        className="fas fa-bars fa-1x"></i></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    
                    <div className='nav_mid_iteams'>
                        <div className=''>HOME</div>
                        <div>ABOUT</div>
                        <div>TEAM</div>
                        <div>SERVICES</div>
                    </div>
                </div>
                <div><button className='btn btn-outline-dark login_btn'>LOGIN</button></div>
            </div> */}

            {/* navagation start */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand"><img className='mainlogo' src={mainlogo} alt='sarthik' /> Sarthik</span>

                <div className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0 my_btn1" type="submit">LOGIN</button>
                </div>
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
                        <button className="btn btn-outline-success my-2 my-sm-0 my_btn" type="submit">LOGIN</button>
                    </div>
                </div>
            </nav>
            {/* navagation stop */}
            <div>
                <div className='map_container'>
                    <ParticlesConfig />
                </div>
                <div className='signup_button'>
                    <button className='btn-secondary text-light btn-outline-dark'>SIGN UP As Vendor</button>
                    <button className='btn-secondary text-light btn-outline-dark'>SIGN UP As Customer</button>
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

export default Homepage;