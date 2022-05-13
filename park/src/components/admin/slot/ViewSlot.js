import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const ViewSlot = () => {

    const [loading, setLoading] = useState(true);
    const [slotlist, setSlotList] = useState([]);

        useEffect(() => {

            axios.get('api/view-slot').then(res => {
                // console.log(res.data.slot);
                if(res.status === 200)
                {
                    setSlotList(res.data.slot);
                }
                setLoading(false);
            });
    },[]);


    const deleteSlot = (e, id) => {
        e.preventDefault();

        const thisClick = e.currentTarget;
        thisClick.innerText = 'Deleting...';

        axios.delete(`/api/delete-slot/${id}`).then(res => {
            if(res.status === 200)
            {
               swal("Success!", res.data.message, "success");
               thisClick.closest('tr').remove();
            }
            else if (res.data.status === 404)
            {
                thisClick.innerText = 'Deleting...';
            }
        });
    
    }




    var viewslot_HTML_TABLE = "";

    if(loading)
    {
        return <h4>Loading Slot....</h4>
    }
    else
    {
        viewslot_HTML_TABLE = 
        slotlist.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.number}</td>
                    <td>{item.owner_id}</td>
                    <td>{item.status}</td>
                    <td>
                        <Link to={`edit-slot/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button"  onClick={ (e)=> deleteSlot(e, item.id)}  className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div className="container px-4">
            <div className="card">
                <div className="card-header">
                    <h4>Slot List
                        <Link to="/admin/add-slot" className="btn btn-primary btn-sm float-end">Add Slot</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Number</th>
                                <th>Owner ID</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewslot_HTML_TABLE}
                        </tbody>
                    </table>
                </div>            

            </div>
        </div>

    )
}

export default ViewSlot;