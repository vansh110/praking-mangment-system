import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ViewGuest = () => {

    const [loading, setLoading] = useState(true);
    // const [guestlist, setGuestList] = useState([]);
    const [viewGuest, setGuest] = useState([])

    useEffect(() => {

        document.title = "View Guest";

        axios.get('api/view-guest').then(res => {
            // console.log(res.data.guest);
            if (res.status === 200) {
                setGuest(res.data.guest);
                setLoading(false);
            }
        });
    }, []);


    var display_Guestdata = "";

    if (loading) {
        return <h4>Loading View Guest....</h4>
    }
    else {
        display_Guestdata =
            viewGuest.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.guest_name}</td>
                        <td>{item.lc_number}</td>
                        <td><img src={`http://localhost:8000/${item.image}`} width="60px" alt={item.image} /></td>
                        {/* <td>{item.duration} hours</td> */}
                        <td>{item.slot_id}</td>
                        <td>{item.start_date}</td>
                        {/* <td>Rs. {item.charge}</td> */}
                        <td>{item.remarks}</td>
                    </tr>
                )
            })
    }


    return (
        <div className="container px-4">
            <div className="card">
                <div className="card-header">
                <div className="card">
                        <div className="card-header">
                            <h4>Guest List
                                <Link to="/Guestt" className="btn btn-primary btn-sm float-end">Add Guest</Link>
                            </h4>
                        </div>
                    </div>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Guest Name</th>
                                <th>License No</th>
                                <th>Image</th>
                                {/* <th>Duration</th> */}
                                <th>Slot ID</th>
                                <th>Start Date</th>
                                <th>Remarks</th>
                                {/* <th>Charge</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {display_Guestdata}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}

export default ViewGuest;