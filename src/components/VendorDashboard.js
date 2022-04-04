import './VendorDashboard.css';
import UserImage from '../../src/assets/user.png'
import './ConsumerDashboard.css'
import { useEffect,useState } from 'react';
import mainlogo from '../assets/sarathi.png';
import profile from '../assets/user.png';
import "./ConsumerDashboard.css";
import { useNavigate } from "react-router-dom";
import favorite from '../assets/love.png';
import social1 from '../assets/icons/github.png';
import social2 from '../assets/icons/instagram.png';
import social3 from '../assets/icons/linkedin.png';
import social4 from '../assets/icons/youtube.png';

function VendorDashBoard() {
  let navigate = useNavigate();
  const logoutHandler = () => {
      navigate('/home');
  }
    const [requests,setRequests] = useState([]);
    useEffect(()=>{
        fetch('https://snowden-backend-api.herokuapp.com/bookings')
        .then(response => response.json())
        .then(data =>{console.log(data)
            setRequests(data.results);

        })},[]
    );
    return (
        <>              <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <button className="btn btn-outline-success my-2 my-sm-0 my_btn" type="submit" onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    </nav>
    <br></br>
                  <br></br>
                  <br></br>
                  <br></br><br></br>
                  <br></br>
             <div className="container">
                <div className='request-wrap'>
                  
                  
                <h2>Requests</h2>
                <div className="request-block">
                    {requests ? requests.map((request) => {
                        return (
                            <div className="request" key={request.id}>
                                <div className="request-detail">
                                    <div className="user-icon">
                                        <img src={UserImage} alt="user" />
                                    </div>
                                    <div className="user-detail">
                                        <p className="userid">{request.id}</p>
                                        <p className="username">{request.first_name + " "}{request.last_name}</p>
                                        <p className="usermail">{request.email}</p>
                                    </div>
                                </div>
                                <div className="request-status">
                                    <div className="accept-request"><button className="accept-btn">Accept</button></div>
                                    <div className="reject-request"><button className="reject-btn">Reject</button></div>
                                </div>
                            </div>
                        )
                    }): <div>No data</div>}
                </div>
                </div>
                <div className='schedule-wrap'>
                <h2>Scheduled Request</h2>
                <div className="schedule-block">
                {requests && requests.map((request) => {
                        return (
                            <div className="request" key={request.id}>
                            <div className="request-detail">
                                <div className="user-icon">
                                    <img src={UserImage} alt="user" />
                                </div>
                                <div className="user-detail">
                                    <p className="userid">{request.id}</p>
                                    <p className="username">{request.first_name + " "}{request.last_name}</p>
                                    <p className="usermail">{request.email}</p>
                                </div>
                            </div>
                            <div className="request-status">
                                <div className="accept-request"><button className="accept-btn">Accept</button></div>
                                <div className="reject-request"><button className="reject-btn">Reject</button></div>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className='footer_div'>
                <span className='blur_text'>UPLIFT THE VOCAL FOR LOCAL CAMPAIGN WITH</span><br />
                <span className='team_name'>Tean SnowDen</span><br />
                <i>Connecting Vendors to you and helping your daily Life Problems</i><br />

                <button className='btn-primary btn_contact_us'> Contact Us </button><br />

                <i> © 2022, CodeFest at Simform</i><br />
                <div className='footer_sub_section'>
                    <div>Team</div>
                    <div>Home</div>
                    <div>About US</div>
                </div>
                <div className='line_div'></div>
                <div className='footer_section'>
                    <div className='social_media'>
                        <div><img className='image_size' src={social1} alt='social_icon' /></div>
                        <div><img className='image_size' src={social2} alt='social_icon' /></div>
                        <div><img className='image_size' src={social3} alt='social_icon' /></div>
                        <div><img className='image_size' src={social4} alt='social_icon' /></div>
                    </div>
                </div>

                <hr />
            </div>

        </>
    )
}
export default VendorDashBoard;