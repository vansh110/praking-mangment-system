import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";


const EditVehicle = (props) => {


    const history = useHistory();
    const [vehicleInput, setVehicleInput] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);


    useEffect(() => {

        const vehicle_id = props.match.params.id;
        axios.get(`/api/edit-vehicle/${vehicle_id}`).then(res => {
            if (res.data.status === 200) {
                setVehicleInput(res.data.vehicle);
            }
            else if (res.data.status === 404) {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-vehcile");
            }
            setLoading(false);
        });
    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setVehicleInput({ ...vehicleInput, [e.target.name]: e.target.value });
    }


    const updateVehicle = (e) => {
        e.preventDefault();

        const vehicle_id = props.match.params.id;
        const data = vehicleInput;
        axios.put(`/api/update-vehicle/${vehicle_id}`, data).then(res => {
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
                history.push("/admin/view-vehcile");
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
                    <h4>Edit Vehicle
                        <Link to="/admin/view-vehicle" className="btn btn-primary btn-sm float-end">Back</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={updateVehicle}>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>


                            <div className="form-group mb-3">
                                <label>Category ID</label>
                                <input type="number" name="category_id" onChange={handleInput} value={vehicleInput.category_id} className="form-control" ></input>
                                <small className="text-danger">{error.category_id}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>License No</label>
                                <input type="text" name="lc_number" onChange={handleInput} value={vehicleInput.lc_number} className="form-control" ></input>
                                <small className="text-danger">{error.lc_number}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Description</label>
                                <textarea name="description" onChange={handleInput} value={vehicleInput.description} className="form-control" ></textarea>
                                <small className="text-danger">{error.description}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Photo</label>
                                <input type="text" name="photo" onChange={handleInput} value={vehicleInput.photo} className="form-control" ></input>
                                <small className="text-danger">{error.photo}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Owner ID</label>
                                <input type="number" name="owner_id" onChange={handleInput} value={vehicleInput.owner_id} className="form-control" ></input>
                                <small className="text-danger">{error.owner_id}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Status</label>
                                <select className="form-control" name="status" onChange={handleInput} value={vehicleInput.status}>
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

export default EditVehicle;