import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";


const EditSlot = (props) => {


    const history = useHistory();
    const [slotInput, setSlotInput] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);


    useEffect(() => {

        const slot_id = props.match.params.id;
        axios.get(`/api/edit-slot/${slot_id}`).then(res => {
            if (res.data.status === 200) {
                setSlotInput(res.data.slot);
            }
            else if (res.data.status === 404) {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-slot");
            }
            setLoading(false);
        });
    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setSlotInput({ ...slotInput, [e.target.name]: e.target.value });
    }


    const updateSlot = (e) => {
        e.preventDefault();

        const slot_id = props.match.params.id;
        const data = slotInput;
        axios.put(`/api/update-slot/${slot_id}`, data).then(res => {
            if(res.data.status === 200) 
            {
                swal("Success!", res.data.message, "success");
                setError([]);
            }
            else if(res.data.status === 422)
            {
                swal("Fields Are Madaetory!","", "error");
                setError(res.data.errors);
            }
            else if (res.data.status === 404) 
            {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-slot");
            }

        });
    }


    if(loading)
    {
        return <h4>Loading...</h4>
    }



    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Slot
                        <Link to="/admin/view-slot" className="btn btn-primary btn-sm float-end">Back</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={updateSlot}>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>


                            <div className="form-group mb-3">
                                <label>Number</label>
                                <input type="number" name="number" onChange={handleInput} value={slotInput.firstname} className="form-control" ></input>
                                <small className="text-danger">{error.number}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>Owner ID</label>
                                <input type="number" name="owner_id" onChange={handleInput} value={slotInput.owner_id} className="form-control" ></input>
                                <small className="text-danger">{error.owner_id}</small>

                            </div>
                           
                            <div className="form-group mb-3">
                                <label>Status</label>
                                <select className="form-control" name="status" onChange={handleInput} value={slotInput.status}>
                                    <option value="0">Active</option>
                                    <option value="1">Inactive</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary px-4 float-end">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditSlot;