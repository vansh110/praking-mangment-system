import React from "react";
import axios from 'axios';
import { useState } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

const Guest = () => {

   
    const [guestInput, setGuest] = useState({
        guest_name: '',
        lc_number: '',
        image: '',
        // duration: '',
        slot_id: '',
        start_date: '',
        charge: '',
        // remarks: '',
        error_list: [],
    });

    const [picture, setPicture] = useState([]);
    const [errorlist, setError] = useState([]);
        

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
        // formData.append('duration', guestInput.duration);
        formData.append('slot_id', guestInput.slot_id);
        formData.append('start_date', guestInput.start_date);
        // formData.append('charge', guestInput.charge);
        formData.append('remarks', guestInput.remarks);
        

        axios.post(`api/store-guest`, formData).then(res => {
            if(res.data.status === 200)
            {
                swal("Success!", res.data.message, "success");
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

                setError([]);
            }
            else if(res.data.status === 422)
            {
                swal("All fields are required!", "", "error");
                setError(res.data.errors);
            }
            
        })

    }


    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Add Guest</h1>

            <h4>
                        <Link to="/ViewGuestt" className="btn btn-primary btn-sm float-end">View Guest</Link>
                    </h4>
            

            <form encType="multipart/form-data" onSubmit={submitGuest} id = "GUEST-FORM" >
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
                    

                    <div className="form-group mb-3">
                        <label>Guest Name</label>
                        <input type="text" name="guest_name" onChange={handleInput} value={guestInput.guest_name} className="form-control" ></input>
                        <small className="text-danger">{errorlist.guest_name}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>License Number</label>
                        <input type="text" name="lc_number" onChange={handleInput} value={guestInput.lc_number}  className="form-control" ></input>
                        <small className="text-danger">{errorlist.lc_number}</small>
                    </div>

                    <div className="form-group mb-3">
                        <label>Image</label>
                        <input type="file" name="image" onChange={handleImage} className="form-control" ></input>
                        <small className="text-danger">{errorlist.image}</small>
                    </div>

                    {/* <div className="form-group mb-3">
                        <label>Duration</label>
                        <input type="number" name="duration" onChange={handleInput} value={guestInput.duration}  className="form-control" placeholder="In Hour" ></input>
                        <small className="text-danger">{guestInput.duration}</small>
                    </div> */}


                    <div className="form-group mb-3">
                        <label>Slot ID</label>
                        <input type="number" name="slot_id" onChange={handleInput} value={guestInput.slot_id}  className="form-control" ></input>
                        <small className="text-danger">{errorlist.slot_id}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Start Date</label>
                        <input type="date" name="start_date" onChange={handleInput} value={guestInput.start_date}  className="form-control" ></input>
                        <small className="text-danger">{errorlist.start_date}</small>
                    </div>
                    {/* <div className="form-group mb-3">
                        <label>Charge</label>
                        <input type="number" name="charge" onChange={handleInput} value={guestInput.charge}  className="form-control" ></input>
                        <small className="text-danger">{errorlist.charge}</small>
                    </div> */}
                    <div className="form-group mb-3">
                        <label>Remarks</label>
                        <input type="test" name="remarks" onChange={handleInput} value={guestInput.remarks}  className="form-control" ></input>
                        <small className="text-danger">{errorlist.remarks}</small>
                    </div>
                    
                </div>

                <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
            </form>
        </div>
    )
}

export default Guest;