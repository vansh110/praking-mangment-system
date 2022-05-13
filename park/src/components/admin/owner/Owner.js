import React from "react";
import axios from 'axios';
import { useState } from "react";
import swal from 'sweetalert';

const Owner = () => {


    const [ownerInput, setOwner] = useState({
        firstname: '',
        lastname: '',
        contactno: '',
        email: '',
        status: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setOwner({...ownerInput, [e.target.name]:e.target.value});
    }

    
    const submitOwner = (e) => {
        e.preventDefault();

        const data = {
            firstname: ownerInput.firstname,
            lastname: ownerInput.lastname,
            contactno: ownerInput.contactno,
            email: ownerInput.email,
            status: ownerInput.status,
        }

        axios.post(`api/store-owner`, data).then(res => {
            if(res.data.status === 200)
            {
                swal("Success!", res.data.message, "success");
                document.getElementById('OWNER_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setOwner({...ownerInput, error_list: res.data.errors});
            }
            
        })

    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Add Owner</h1>

            

            <form onSubmit={submitOwner} id = "OWNER-FORM" >
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
                    

                    <div className="form-group mb-3">
                        <label>First Name</label>
                        <input type="text" name="firstname" onChange={handleInput} value={ownerInput.firstname} className="form-control" ></input>
                        <small className="text-danger">{ownerInput.error_list.firstname}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Last Name</label>
                        <input type="text" name="lastname" onChange={handleInput} value={ownerInput.lastname}  className="form-control" ></input>
                        <small className="text-danger">{ownerInput.error_list.lastname}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Contact NO</label>
                        <input type="text" name="contactno" onChange={handleInput} value={ownerInput.contactno}  className="form-control" ></input>
                        <small className="text-danger">{ownerInput.error_list.contactno}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Email</label>
                        <input type="text" name="email" onChange={handleInput} value={ownerInput.email}  className="form-control" ></input>
                        <small className="text-danger">{ownerInput.error_list.email}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Status</label>
                        <select className="form-control" name="status" onChange={handleInput} value={ownerInput.status}>
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

export default Owner;