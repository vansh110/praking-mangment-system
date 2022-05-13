import React from "react";
import { useState, useEffect } from 'react';
  
import axios from 'axios';
import swal from 'sweetalert';


const Ownerbooking = () => {

    


    const [loading, setLoading] = useState(true);
    const [obooklist, setObookList] = useState([]);

    const [obookInput, setObook] = useState({
        o_name: '',
        v_no: '',
        in_time: '',
        out_time: '',
        d_slot: '',
        v_type: '',
        fees: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setObook({ ...obookInput, [e.target.name]: e.target.value });
    }

    const submitObook = (e) => {
        e.preventDefault();

        // window.location.reload(false);

        const data = {
            o_name: obookInput.o_name,
            v_no: obookInput.v_no,
            in_time: obookInput.in_time,
            out_time: obookInput.out_time,
            d_slot: obookInput.d_slot,
            v_type: obookInput.v_type,
            fees: obookInput.fees,
        }

        axios.post(`api/st-obook`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success!", res.data.message, "success");
                document.getElementById('OBOOK_FORM').reset();
            }
            else if (res.data.status === 400) {
                setObook({ ...obookInput, error_list: res.data.errors });
                // swal("Error!","All Fields are required!", "error");
            }

        })

    }



    useEffect(() => {

        axios.get('api/view-obook').then(res => {
            // console.log(res.data.owner);
            if (res.status === 200) {
                setObookList(res.data.obook);
            }
            setLoading(false);
        });
    }, []);



    var viewobook_HTML_TABLE = "";

    if(loading)
    {
        return <h4>Loading Owner Booking Details....</h4>
    }
    else
    {
        viewobook_HTML_TABLE = 
        obooklist.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.o_name}</td>
                    <td>{item.v_no}</td>
                    <td>{item.in_time}</td>
                    <td>{item.out_time}</td>
                    <td>{item.d_slot}</td>
                    <td>{item.v_type}</td>
                    <td>{item.fees}</td>
                </tr>
            )
        })
    }
 
    
    return (
        <div className="container rounded shadow-sm">

            <form onSubmit={submitObook} id="OBOOK-FORM" >
                <div className="row">
                    <div className="col-md-3 pe-0 col-sm-12">
                        <div className="btn radio-btn mb-4"> <label className="checkbox"> <input type="checkbox" value="a" name="book" checked /> <span>Free Booking for owner</span> </label> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Owner Name</p> <input type="text" name="o_name" onChange={handleInput} value={obookInput.o_name} className="inputbox" placeholder="Name" />
                            <small className="text-danger">{obookInput.error_list.o_name}</small>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Vehicle Number</p> <input name="v_no" onChange={handleInput} value={obookInput.v_no} className="inputbox" placeholder="Ex. GJ15 AL6222" type="text" />
                            <small className="text-danger">{obookInput.error_list.v_no}</small>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">In Time</p> <input name="in_time" onChange={handleInput} value={obookInput.in_time} className="inputbox textmuted" type="time" />
                            <small className="text-danger">{obookInput.error_list.in_time}</small>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Out Time</p> <input name="out_time" onChange={handleInput} value={obookInput.out_time} className="inputbox textmuted " type="time" />
                            <small className="text-danger">{obookInput.error_list.out_time}</small>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-5">
                    </div>
                    <div className="col-md-2 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Default Slot(1-10)</p> <select name="d_slot" onChange={handleInput} value={obookInput.d_slot} className="border-0 outline-none">
                                <option value="" hidden selected>select slot</option>
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="A3">A3</option>
                                <option value="A4">A4</option>
                                <option value="A5">A5</option>
                                <option value="A6">A6</option>
                                <option value="A7">A7</option>
                                <option value="A8">A8</option>
                                <option value="A9">A9</option>
                                <option value="A10">A10</option>
                            </select>
                            <small className="text-danger">{obookInput.error_list.d_slot}</small>
                        </div>
                    </div>
                    <div className="col-md-2 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Vehicle</p> <select name="v_type" onChange={handleInput} value={obookInput.v_type} className="border-0 outline-none">
                                <option value="" hidden selected>type</option>
                                <option value="4 wheel">4 wheel</option>
                                <option value="2 wheel">2 wheel</option>
                            </select>
                            <small className="text-danger">{obookInput.error_list.v_type}</small>
                        </div>
                    </div>
                    <div className="col-md-2 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Fees</p> <select name="fees" onChange={handleInput}  value={obookInput.fees} className="border-0 outline-none">
                                <option value="" hidden selected>Cost</option>
                                <option value="Zero Charges">Zero Charge</option>
                            </select>
                            <small className="text-danger">{obookInput.error_list.fees}</small>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-warning form-control text-center">book Now</button>
            </form>
            

            {/* THis view page */}

            <hr className="my-5" />

            {/* <button className="btn btn-success form-control text-center" onClick={() => window.location.reload(false)}>Reset</button> */}

            <div className="container px-4">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title bg-info">Owner Book Details</h4>  
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Owner Name</th>
                                <th>Vehicle Number</th>
                                <th>In Time</th>
                                <th>Out Time</th>
                                <th>Slot Number</th>
                                <th>Vehicle Type</th>
                                <th>Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewobook_HTML_TABLE}
                        </tbody>
                    </table>
                </div>  
   

            </div>
        </div>


        <hr className="my-5" />     



        </div>
    )
}

export default Ownerbooking;