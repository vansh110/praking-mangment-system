import React from "react";
import axios from 'axios';
import { useState } from "react";
import swal from 'sweetalert';

const Vehicle = () => {


    const [vehicleInput, setVehicle] = useState({
        category_id: '',
        lc_number: '',
        description: '',
        photo: '',
        owner_id: '',
        status: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setVehicle({...vehicleInput, [e.target.name]:e.target.value});
    }

    
    const submitVehicle = (e) => {
        e.preventDefault();

        const data = {
            category_id: vehicleInput.category_id,
            lc_number: vehicleInput.lc_number,
            description: vehicleInput.description,
            photo: vehicleInput.photo,
            owner_id: vehicleInput.owner_id,
            status: vehicleInput.status,
        }

        axios.post(`api/store-vehicle`, data).then(res => {
            if(res.data.status === 200)
            {
                swal("Success!", res.data.message, "success");
                document.getElementById('VEHICLE_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setVehicle({...vehicleInput, error_list: res.data.errors});
            }
            
        })

    }



    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Add Vehicle</h1>

            

            <form onSubmit={submitVehicle} id = "VEHICLE-FORM" >
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
                    

                    <div className="form-group mb-3">
                        <label>category ID</label>
                        <input type="number" name="category_id" onChange={handleInput} value={vehicleInput.category_id} className="form-control" ></input>
                        <span className="text-danger">{vehicleInput.error_list.category_id}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label>License No</label>
                        <input type="text" name="lc_number" onChange={handleInput} value={vehicleInput.lc_number} className="form-control" ></input>
                        <span className="text-danger">{vehicleInput.error_list.lc_number}</span>   
                    </div>

                    <div className="form-group mb-3">
                        <label>Description</label>
                        <textarea name="description" onChange={handleInput} value={vehicleInput.description} className="form-control" ></textarea>
                        <span className="text-danger">{vehicleInput.error_list.description}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label>Photo</label>
                        <input type="file" name="photo" onChange={handleInput} value={vehicleInput.photo} className="form-control" ></input>
                        <span className="text-danger">{vehicleInput.error_list.photo}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label>Owner ID</label>
                        <input type="number" name="owner_id" onChange={handleInput} value={vehicleInput.owner_id} className="form-control" ></input>
                        <span className="text-danger">{vehicleInput.error_list.owner_id}</span>
                    </div>

                    <div className="form-group mb-3">
                        <label>Status</label>
                        <select className="form-control" name="status" onChange={handleInput} value={vehicleInput.status}>
                            <option value="0">Active</option>
                            <option value="1">Inactive</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
            </form>
        </div>
    )
}

export default Vehicle;