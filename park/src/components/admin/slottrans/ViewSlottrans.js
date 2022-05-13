import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const ViewSlottrans = () => {

    const [loading, setLoading] = useState(true);
    const [slottranslist, setSlottransList] = useState([]);

        useEffect(() => {

            axios.get('api/view-slottrans').then(res => {
                // console.log(res.data.slottrans);
                if(res.status === 200)
                {
                    setSlottransList(res.data.slottrans);
                }
                setLoading(false);
            });
    },[]);


    const deleteSlottrans = (e, id) => {
        e.preventDefault();

        const thisClick = e.currentTarget;
        thisClick.innerText = 'Deleting...';

        axios.delete(`/api/delete-slottrans/${id}`).then(res => {
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




    var viewslottrans_HTML_TABLE = "";

    if(loading)
    {
        return <h4>Loading Slot Transaction....</h4>
    }
    else
    {
        viewslottrans_HTML_TABLE = 
        slottranslist.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.slot_id}</td>
                    <td>{item.vehicle_id}</td>
                    <td>{item.lc_number}</td>
                    <td>{item.start_date_time}</td>
                    <td>{item.end_date_time}</td>
                    <td>
                        <Link to={`edit-slottrans/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button"  onClick={ (e)=> deleteSlottrans(e, item.id)}  className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div className="container px-4">
            <div className="card">
                <div className="card-header">
                    <h4>Slot Transaction List
                        <Link to="/admin/add-slottrans" className="btn btn-primary btn-sm float-end">Add Slot Transaction</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Slot ID</th>
                                <th>Vehicle ID</th>
                                <th>LC Number</th>
                                <th>Start Date Time</th>
                                <th>End Date Time</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewslottrans_HTML_TABLE}
                        </tbody>
                    </table>
                </div>            

            </div>
        </div>

    )
}

export default ViewSlottrans;