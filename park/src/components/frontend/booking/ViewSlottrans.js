import React from "react";
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import { Link } from "react-router-dom";

const ViewSlottrans = (props) => {


    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [guest, setGuest] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const guest_details = props.match.params.slot_id;

        axios.get(`/api/fetchGuest/${guest_details}`).then(res => {
            if(isMounted)
            {
                if (res.data.status === 200) 
                {
                    // console.log(res.data.guest);
                    setGuest(res.data.guest);
                    setLoading(false);
                }
                else if (res.data.status === 400)
                {
                    swal("Oops!", "No Guest Found!", "error");
                    history.push("/booking");
                }

                else if (res.data.status === 404)
                {
                    history.push('/');
                    swal("Oops!", "No Booking Found!", "error");
                }
            }
        });

        return () => {
            isMounted = false;
        }

    },[props.match.params.slot_id,history]);


    if(loading)
    {
        return <h1>Loading Booking for Guest...</h1>
    }
    else
    {
        var showGuestList = '';
        showGuestList = guest.map((item, idx) => {
            return (
                <div className="col-md-3" key={idx}>
                    <div className="card">
                        <div className="card-body">
                        <Link to={`/booking/${item.slot_id}/${item.guest_name}`}>
                            <div className="card" > Name :{item.guest_name}</div>
                            <div className="card"> Slot :{item.slot_id}</div>
                            <div className="card"> LICENSE : {item.lc_number}</div>
                            <div className="card"> Duration : {item.duration}</div>
                            <div className="card"> Date : {item.start_date}</div>
                            <div className="card"> Remarks : {item.remarks}</div>
                        </Link>
                        <Link to={`/booking/${item.slot_id}/${item.guest_name}`}>
                        <img src={`http://localhost:8000/${item.image}`} className="w-100" alt={item.image} />
                        </Link>    
                        </div>
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Booking / Slot</h6>
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

export default ViewSlottrans;