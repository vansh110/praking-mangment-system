import React from "react";
import axios from 'axios';
import { useState } from "react";
import swal from 'sweetalert';

const Slot = () => {


    const [slotInput, setSlot] = useState({
        number: '',
        owner_id: '',
        status: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setSlot({...slotInput, [e.target.name]:e.target.value});
    }

    
    const submitSlot = (e) => {
        e.preventDefault();

        const data = {
            number: slotInput.number,
            owner_id: slotInput.owner_id,
            status: slotInput.status,
        }

        axios.post(`api/store-slot`, data).then(res => {
            if(res.data.status === 200)
            {
                swal("Success!", res.data.message, "success");
                document.getElementById('SLOT_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setSlot({...slotInput, error_list: res.data.errors});
            }
            
        })

    }

    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Add Slot</h1>

            

            <form onSubmit={submitSlot} id = "SLOT-FORM" >
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
                    

                    <div className="form-group mb-3">
                        <label>Number</label>
                        <input type="number" name="number" onChange={handleInput} value={slotInput.number} className="form-control" ></input>
                        <small className="text-danger">{slotInput.error_list.number}</small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Owner ID</label>
                        <input type="number" name="owner_id" onChange={handleInput} value={slotInput.owner_id} className="form-control" placeholder="Ex. 112"></input>
                        <small className="text-danger">{slotInput.error_list.owner_id}</small>
                    </div>
                    
                    <div className="form-group mb-3">
                        <label>Status</label>
                        <select className="form-control" name="status" onChange={handleInput} value={slotInput.status}>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
            </form>
        </div>
    )
}

export default Slot;