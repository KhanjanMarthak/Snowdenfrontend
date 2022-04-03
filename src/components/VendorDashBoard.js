import './VendorDashBoard.css';
import UserImage from '../../src/assets/user.png'
import { useEffect,useState } from 'react';
function VendorDashBoard() {
    const [requests,setRequests] = useState([]);
    useEffect(()=>{
        fetch('https://snowden-backend-api.herokuapp.com/bookings')
        .then(response => response.json())
        .then(data =>{console.log(data)
            setRequests(data.results);

        })},[]
    );
    return (
        <>
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

        </>
    )
}
export default VendorDashBoard;