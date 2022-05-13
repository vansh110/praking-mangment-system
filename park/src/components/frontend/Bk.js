import React from "react";
import { useState } from 'react';
  
import axios from 'axios';
import swal from 'sweetalert';


const Bk = () => {


    const [guestInput, setGuest] = useState({
        guest_name: '',
        lc_number: '',
        image: '',
        duration: '',
        slot_id: '',
        start_date: '',
        charge: '',
        remarks: '',
        error_list: [],
    });

    const [picture, setPicture] = useState([]);
    const [error_list, setError] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setGuest({...guestInput, [e.target.name]:e.target.value});
    }

    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] });
    }

    
    const submitGuest = (e) => {
        e.preventDefault();

        const formData = new FormData();
    
        formData.append('guest_name', guestInput.guest_name);
        formData.append('lc_number', guestInput.lc_number);
        formData.append('image', picture.image);
        formData.append('duration', guestInput.duration);
        formData.append('slot_id', guestInput.slot_id);
        formData.append('start_date', guestInput.start_date);
        formData.append('charge', guestInput.charge);
        formData.append('remarks', guestInput.remarks);
        

        axios.post(`api/store-guest`, formData).then(res => {
            if(res.data.status === 200)
            {
                swal("Booked!","", "success");
                setGuest({...guestInput,
                    guest_name: '',
                    lc_number: '',
                    image: '',
                    duration: '',
                    slot_id: '',
                    start_date: '',
                    charge: '',
                    remarks: '',
                });

            }
            else if(res.data.status === 400)
            {
                // swal("All fields are required!", "", "error");
                setError(res.data.errors);
            }
            
        })

    }


 
    
    return (
        <div className="container rounded shadow-sm">

            <form onSubmit={submitGuest} id="GUEST-FORM" >
                <div className="row">
                    <div className="col-md-3 pe-0 col-sm-12">
                        <div className="btn radio-btn mb-4">  </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Guest Name</p> <input type="text" name="guest_name" onChange={handleInput} value={guestInput.guest_name} className="inputbox" placeholder="Name" />
                            <small className="text-danger">{error_list.guest_name}</small>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">License Number</p> <input name="lc_number" onChange={handleInput} value={guestInput.lc_number} className="inputbox" placeholder="Ex. GJ19 12345678911" type="text" />
                            <small className="text-danger">{error_list.lc_number}</small>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Slot Number</p> <select name="slot_id" onChange={handleInput} value={guestInput.slot_id} className="border-0 outline-none">
                                <option value="" hidden selected>select slot</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="B3">B3</option>
                                <option value="B4">B4</option>
                                <option value="B5">B5</option>
                                <option value="C1">C1</option>
                                <option value="C2">C2</option>
                                <option value="C3">C3</option>
                                <option value="C4">C4</option>
                                <option value="C5">C5</option>
                                <option value="D1">D1</option>
                                <option value="D2">D2</option>
                                <option value="D3">D3</option>
                                <option value="D4">D4</option>
                                <option value="D5">D5</option>
                            </select>
                            <small className="text-danger">{error_list.slot_id}</small>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-4">
                    <div className="form-control d-flex flex-column">
                            <p className="h-blue">Start Date</p> <input name="start_date" onChange={handleInput} value={guestInput.start_date} className="inputbox textmuted " type="date" />
                            <small className="text-danger">{error_list.start_date}</small>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">License image</p> <input name="image" onChange={handleImage}  className="inputbox textmuted" type="file" />
                            <small className="text-danger">{error_list.image}</small>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-md-3 mb-5">
                    </div> */}
                    <div className="col-md-3 mb-4">
                    <div className="form-control d-flex flex-column">
                            <p className="h-blue">Charges (Rs. 40/Hours)</p> <select name="charge" onChange={handleInput} value={guestInput.charge} className="border-0 outline-none">
                                <option value="" hidden selected>Hours/days</option>
                                <option value="RS. 20">1 hour</option>
                                <option value="Rs. 40">2 hours</option>
                                <option value="Rs. 60">3 hours</option>
                                <option value="Rs. 80">4 hours</option>
                                <option value="Rs. 100">5 hours</option>
                                <option value="Rs. 120">6 hours</option>
                                <option value="Rs. 140">7 hours</option>
                                <option value="Rs. 160">8 hours</option>
                                <option value="Rs. 180">9 hours</option>
                                <option value="Rs. 200">10 hours</option>
                                <option value="Rs. 220">11 hours</option>
                                <option value="Rs. 240">12 hours</option>
                                <hr />
                                <option value="Rs. 240">1 day</option>
                                <option value="Rs. 480">2 days</option>
                                <option value="Rs. 720">3 days</option>
                                <option value="Rs. 960">4 days</option>   
                            </select>
                            <small className="text-danger">{error_list.charge}</small>
                        </div> 
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="form-control d-flex flex-column">
                            <p className="h-blue">Remarks</p> <select name="remarks" onChange={handleInput} value={guestInput.remarks} className="border-0 outline-none">
                                <option value="" hidden selected>Feedback</option>
                                <option value="Good">Good</option>
                                <option value="Average">Average</option>
                                <option value="Poor">Poor</option>
                            </select>
                            <small className="text-danger">{error_list.remarks}</small>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-warning form-control text-center">book Now</button>
            </form>
        </div>
    )
}

export default Bk;