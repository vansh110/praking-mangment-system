import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";


const EditOwner = (props) => {


    const history = useHistory();
    const [ownerInput, setOwnerInput] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);


    useEffect(() => {

        const owner_id = props.match.params.id;
        axios.get(`/api/edit-owner/${owner_id}`).then(res => {
            if (res.data.status === 200) {
                setOwnerInput(res.data.owner);
            }
            else if (res.data.status === 404) {
                swal("Error!", res.data.message, "error");
                history.push("/admin/view-owner");
            }
            setLoading(false);
        });
    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setOwnerInput({ ...ownerInput, [e.target.name]: e.target.value });
    }


    const updateOwner = (e) => {
        e.preventDefault();

        const owner_id = props.match.params.id;
        const data = ownerInput;
        axios.put(`/api/update-owner/${owner_id}`, data).then(res => {
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
                history.push("/admin/view-owner");
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
                    <h4>Edit Owner
                        <Link to="/admin/view-owner" className="btn btn-primary btn-sm float-end">Back</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={updateOwner}>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>


                            <div className="form-group mb-3">
                                <label>First Name</label>
                                <input type="text" name="firstname" onChange={handleInput} value={ownerInput.firstname} className="form-control" ></input>
                                <small className="text-danger">{error.firstname}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>Last Name</label>
                                <input type="text" name="lastname" onChange={handleInput} value={ownerInput.lastname} className="form-control" ></input>
                                <small className="text-danger">{error.lastname}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>Contact NO</label>
                                <input type="text" name="contactno" onChange={handleInput} value={ownerInput.contactno} className="form-control" ></input>
                                <small className="text-danger">{error.contactno}</small>

                            </div>
                            <div className="form-group mb-3">
                                <label>Email</label>
                                <input type="text" name="email" onChange={handleInput} value={ownerInput.email} className="form-control" ></input>
                                <small className="text-danger">{error.email}</small>


                            </div>
                            <div className="form-group mb-3">
                                <label>Status</label>
                                <select className="form-control" name="status" onChange={handleInput} value={ownerInput.status}>
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

export default EditOwner;