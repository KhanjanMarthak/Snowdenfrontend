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
        </div>
    )
}

export default ConsumerDashboard