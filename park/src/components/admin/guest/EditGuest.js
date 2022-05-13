import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";


const EditOwner = (props) => {


    const history = useHistory();
    const [guestInput, setGuestInput] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);
    const [setPicture] = useState([]);


    useEffect(() => {

        const guest_id = props.match.params.id;
        axios.get(`/api/edit-guest/${guest_id}`).then(res => {
            if (res.data.status === 200) {
                setGuestInput(res.data.guest);
            }
            else if (res.data.status === 404) {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-guest");
            }
            setLoading(false);
        });
    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setGuestInput({ ...guestInput, [e.target.name]: e.target.value });
    }


    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] });
    }


    const updateGuest = (e) => {
        e.preventDefault();

        const guest_id = props.match.params.id;

        const data = guestInput;
        axios.put(`/api/update-guest/${guest_id}`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success!", res.data.message, "success");
                setError([]);
            }
            else if (res.data.status === 422) {
                swal("Fields Are Madaetory!", "", "error");
                setError(res.data.errors);
            }
            else if (res.data.status === 404) {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-guest");
            }

        });
    }


    if (loading) {
        return <h4>Loading...</h4>
    }



    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Guest
                        <Link to="/admin/view-owner" className="btn btn-primary btn-sm float-end">Back</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form encType="multipart/form-data" onSubmit={updateGuest} id="GUEST-FORM">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>


                            <div className="form-group mb-3">
                                <label> Name</label>
                                <input type="text" name="guest_name" onChange={handleInput} value={guestInput.guest_name} className="form-control" ></input>
                                <small className="text-danger">{error.guest_name}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>License No</label>
                                <input type="text" name="lc_number" onChange={handleInput} value={guestInput.lc_number} className="form-control" ></input>
                                <small className="text-danger">{error.lc_number}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Image</label>
                                <input type="file" name="image" className="form-control" onChange={handleImage} />
                                <img src={`http://localhost:8000/${guestInput.image}`} width="60px" alt={guestInput.image} />
                                <small className="text-danger">{error.image}</small>
                            </div>

                            <div className="form-group mb-3">
                                <div className="form-control d-flex flex-column">
                                    <p className="h-blue">Duration</p> <select name="duration" onChange={handleInput} value={guestInput.duration} className="border-0 outline-none">
                                        <option value="" hidden selected>Hours | days</option>
                                        <option value="1 hr">1 hour</option>
                                        <option value="2 hr">2 hours</option>
                                        <option value="3 hr">3 hours</option>
                                        <option value="4 hr">4 hours</option>
                                        <option value="5 hr">5 hours</option>
                                        <option value="6 hr">6 hours</option>
                                        <option value="7 hr">7 hours</option>
                                        <option value="8 hr">8 hours</option>
                                        <option value="9 hr">9 hours</option>
                                        <option value="10 hr">10 hours</option>
                                        <option value="11 hr">11 hours</option>
                                        <option value="12 hr">12 hours</option>
                                        <hr />
                                        <option value="1 day">1 day</option>
                                        <option value="2 day">2 days</option>
                                        <option value="3 day">3 days</option>
                                        <option value="4 day">4 days</option>
                                    </select>
                                    <small className="text-danger">{error.duration}</small>
                                </div>
                            </div>

                            <div className="form-group mb-3">
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
                                    <small className="text-danger">{error.slot_id}</small>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <label>Start Date</label>
                                <input type="date" name="start_date" onChange={handleInput} value={guestInput.start_date} className="form-control" ></input>
                                <small className="text-danger">{error.start_date}</small>
                            </div>

                            <div className="form-group mb-3">
                                <div className="form-control d-flex flex-column">
                                    <p className="h-blue">Charges (₹ 20 / Hr)</p> <select name="charge" onChange={handleInput} value={guestInput.charge} className="border-0 outline-none">
                                        <option value="" hidden selected>Hours | days</option>
                                        <option value="RS. 20">₹ 20 / 1hr</option>
                                        <option value="RS. 40">₹ 40 / 2hr</option>
                                        <option value="RS. 60">₹ 60 / 3hr</option>
                                        <option value="RS. 80">₹ 80 / 4hr</option>
                                        <option value="RS. 100">₹ 100 / 5hr</option>
                                        <option value="RS. 120">₹ 120 / 6hr</option>
                                        <option value="RS. 140">₹ 140 / 7hr</option>
                                        <option value="RS. 160">₹ 160 / 8hr</option>
                                        <option value="RS. 180">₹ 180 / 9hr</option>
                                        <option value="RS. 200">₹ 200 / 10hr</option>
                                        <option value="RS. 220">₹ 220 / 11hr</option>
                                        <option value="RS. 240">₹ 240 / 12hr</option>

                                        <option value="Rs. 240">₹ 240 / 1 day</option>
                                        <option value="Rs. 480">₹ 480 / 2 day</option>
                                        <option value="Rs. 720">₹ 720 / 3 day</option>
                                        <option value="Rs. 960">₹ 960 / 4 day</option>
                                    </select>
                                    <small className="text-danger">{error.charge}</small>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <div className="form-control d-flex flex-column">
                                    <p className="h-blue">Remarks</p> <select name="remarks" onChange={handleInput} value={guestInput.remarks} className="border-0 outline-none">
                                        <option value="" hidden selected>Feedback</option>
                                        <option value="Good">Good</option>
                                        <option value="Average">Average</option>
                                        <option value="Poor">Poor</option>
                                    </select>
                                    <small className="text-danger">{error.remarks}</small>
                                </div>
                            </div>

                        </div>
                        {/* <button type="reset" className="btn btn-danger btn-block">Reset</button> */}
                        <button type="submit" className="btn btn-primary px-4 float-end">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditOwner;