import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ViewGuest = () => {

    const [loading, setLoading] = useState(true);
    const [guest, setGuest] = useState([]);

    useEffect(() => {
        let isMounted = true;

        axios.get(`/api/getGuest`).then(res => {
            if(isMounted)
            {
                if (res.data.status === 200) 
                {
                    // console.log(res.data.guest);
                    setGuest(res.data.guest);
                    setLoading(false);
                }
            }
        });

        return () => {
            isMounted = false;
        }

    });

    if(loading)
    {
        return <h1>Loading Booking for Guest...</h1>
    }
    else
    {
        var showGuestList = '';
        showGuestList = guest.map((item, idx) => {
            return (
                <div className="col-md-4" key={idx}>
                    <div className="card">
                        <div className="card-body">
                        <Link to={`booking/${item.slot_id}`}>
                            <div className="card-title"></div>
                            <div className="card-text bg-light">
                                <h5>Guest Details</h5>
                            </div>
                            {/* <h5 className="card-title">{item.slot_id}</h5> */}
                        </Link>    
                        </div>
                        {/* <Link to={`/booking/${item.slot_id}/${item.guest_name}`}>
                        <img src={`http://localhost:8000/${item.image}`} className="w-100" alt={item.image} />
                        </Link>    */}
                    </div>
                </div>            
            )
        })
    }


    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Booking Page</h6>
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">
                        {showGuestList}
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ViewGuest;