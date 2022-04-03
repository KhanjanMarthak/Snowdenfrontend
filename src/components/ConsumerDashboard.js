import React from 'react'
import mainlogo from '../assets/sarathi.png';
import profile from '../assets/user.png';
import "./ConsumerDashboard.css";
import favorite from '../assets/love.png'

function ConsumerDashboard() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand"><img className='mainlogo' src={mainlogo} alt='sarthi' /> Sarthi</span>

                <div className="form-inline my-2 my-lg-0">
                    <div className="btn  my-2 my-sm-0 my_btn1" type="submit">
                        <img className="profilephoto" src={profile} alt="myimage" />
                    </div>
                    <div className="btn  my-2 my-sm-0 my_btn1" type="submit">
                        <img className="profilephoto" src={favorite} alt="myimage" />
                    </div>
                    <button className="btn btn-outline-success my-2 my-sm-0 my_btn1" type="submit">Logout</button>
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
                        <div className="btn  my-2 my-sm-0 my_btn" type="submit">
                            <img className="profilephoto" src={profile} alt="myimage" />
                        </div>
                        <div className="btn  my-2 my-sm-0 my_btn" type="submit">
                            <img className="profilephoto" src={favorite} alt="myimage" />
                        </div>
                        <button className="btn btn-outline-success my-2 my-sm-0 my_btn" type="submit">Logout</button>
                    </div>
                </div>
            </nav>

            <div className='map_container'>

            </div>

            <div className='tag_line'>
                We Are here to manage your Daily life Services !!
            </div>
            <div className='deshbord_find_text'>
                Find your Local Vendors Nearby
            </div>


            <div className='div_flex'>
                <div className='dis_flex'>
                    <div> Card View1</div>
                    <div> Card View2</div>
                    <div> Card View3</div>
                    <div> Card View4</div>
                </div>
                <div className='dis_flex'>
                    <div> Card View5</div>
                    <div> Card View6</div>
                    <div> Card View7</div>
                    <div> Card View8</div>
                </div>
            </div>

            <div className='footer_div'>
                <span>UPLIFT THE VOCAL FOR LOCAL CAMPAIGN WITH</span>
                <span>Tean SnowDen</span>
                <span>Connecting Vendors to you and helping your daily Life Problems</span>

                <button className='btn-primary'> Contact Us </button>

                <i> © 2022, CodeFest at Simform</i>

                <div className='footer_section'>
                    <div>logo</div>
                    <div className='footer_sub_section'>
                        <div>Team</div>
                        <div>Home</div>
                        <div>About US</div>
                    </div>
                    <div className='social_media'>
                        <div><img src=''/>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <hr />
            </div>
        </div>
    )
}

export default ConsumerDashboard