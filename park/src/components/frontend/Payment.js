import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';

const Payment = () => {


    const [loading, setLoading] = useState(true);
    const [guestlist, setGuest] = useState([]);

    const [paymentInput, setPayment] = useState({
        booking_id:'',
        amount:'',
        error_list: [],
    });


    // const handleInput = (e) => {
    //     e.persist();
    //     setPayment({ ...paymentInput, [e.target.name]: e.target.value });
    // }

    const submitPayment = (e, payment_mode) => {
        e.preventDefault();

        const data = {
            booking_id: paymentInput.booking_id,
            amount: paymentInput.amount,
            payment_mode: payment_mode,
        }

        axios.post(`api/st-pay`, data).then(res => {
            if (res.data.status === 200) {
                swal("Pay", res.data.message, "success");
                document.getElementById('PAYMENT_FORM').reset();
            }
            else if (res.data.status === 400) {
                setPayment({ ...paymentInput, error_list: res.data.errors });
                // swal("Error!","All Fields are required!", "error");
            }
        
        })

    }

    useEffect(() => {
        axios.get('api/view-guest').then(res => {
            // console.log(res.data.guest);
            if(res.status === 200)
            {
                setGuest(res.data.guest);
                setLoading(false);
            }
            setLoading(false);
        });
    }, []);



    const deleteGuest = (e, id) => {
        e.preventDefault();

        const thisClick = e.currentTarget;
        thisClick.innerText = 'Canecl...';

        axios.delete(`/api/delete-guest/${id}`).then(res => {
            if(res.status === 200)
            {
               swal("Success!", res.data.message, "success");
               thisClick.closest('tr').remove();
            }
            else if (res.data.status === 404)
            {
                thisClick.innerText = 'Cancel...';
            }
        });
    
    }


    var display_Guestdata = "";

    if(loading)
    {
        return <h4>Loading View Guest....</h4>
    }
    else
    {
        display_Guestdata = 
        guestlist.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    {/* <td>{item.lc_number}</td> */}
                    <td><img src={`http://localhost:8000/${item.image}`} width="60px" alt={item.image} /></td>
                    <td>{item.guest_name}</td>
                    <td>BK{Math.floor(Math.random()*9000000000) + 10000}</td>
                    <td>{item.slot_id}</td>
                    <td>{item.duration}</td>
                    
                    {/* <td>{item.start_date}</td> */}
                    <td>{item.charge}</td>
                    {/* <td>{item.remarks}</td> */}
                    <td>
                        {/* <Link to={`st-pay/${item.id}`} className="btn btn-warning btn-lg me-2">Pay</Link> */}


                        <button type="button" className="btn btn-warning btn-sm me-2" onClick={ (e) => submitPayment(e, 'razorpay') } >Pay</button>

                    
                    </td>
                    <td>
                        <button type="button"  onClick={ (e)=> deleteGuest(e, item.id)}  className="btn btn-danger btn-sm me-2">Cancel</button>
                    </td>
                </tr>
            )
        })
    }



    return (

        <div className="container px-4">
            <div className="card">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Photo</th>
                                <th>Guest Name</th>
                                <th>Booking ID</th>
                                <th>Slot ID</th>
                                <th>Duration</th>
                                <th>Charge</th>
                                {/* <th>Pay</th>
                                <th>Cancel</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {display_Guestdata}
                        </tbody>
                    </table>
                </div>            

            </div>
        </div>
        

    );
}

export default Payment;