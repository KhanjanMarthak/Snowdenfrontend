import React from 'react';
import './HomePage.css';
import mainlogo from '../assets/sarathi.png';
import ParticlesConfig from '../config/ParticlesConfig';

function Homepage() {
    return (
        <div>
            {/* <div className='nav_container'>
                <div className='navbar-brand'> <img className='mainlogo' src={mainlogo} alt='sarthik' /> Sarthik</div>
                
                <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
                        class="fas fa-bars fa-1x"></i></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                    
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
            {/* <ParticlesConfig /> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand"><img className='mainlogo' src={mainlogo} alt='sarthik' /> Sarthik</span>

                <div class="form-inline my-2 my-lg-0">
                    <button class="btn btn-outline-success my-2 my-sm-0 my_btn1" type="submit">LOGIN</button>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <div><span></span></div>
                    <div>
                        <ul class="navbar-nav mr-auto justid">
                            <li class="nav-item active">
                                <span class="nav-link">HOME</span>
                            </li>
                            <li class="nav-item active">
                                <span class="nav-link">ABOUT</span>
                            </li>
                            <li class="nav-item active">
                                <span class="nav-link">TEAM</span>
                            </li>
                            <li class="nav-item active">
                                <span class="nav-link">SERVICES</span>
                            </li>

                        </ul>
                    </div>
                    <div class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0 my_btn" type="submit">LOGIN</button>
                    </div>
                </div>
            </nav>
            {/* navagation stop */}

            <div>

            </div>
            <div>
                <div className='map_container'>
                    {/* <ParticlesConfig id="tsparticles" /> */}
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