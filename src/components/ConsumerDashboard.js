import React from 'react'
import mainlogo from '../assets/sarathi.png';
import "./ConsumerDashboard.css";

function ConsumerDashboard() {
    return (
        <div>
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
                        <button className="btn btn-outline-success my-2 my-sm-0 my_btn" type="submit">
                            <img src="./assets/user.png" alt="myimage"/>
                        </button>
                        <button className="btn btn-outline-success my-2 my-sm-0 my_btn" type="submit">
                            <img src="./img/google.png" alt="myimage"/>
                        </button>
                        <button className="btn btn-outline-success my-2 my-sm-0 my_btn" type="submit">LOGIN</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ConsumerDashboard