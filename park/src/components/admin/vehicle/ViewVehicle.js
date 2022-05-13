import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const ViewVehicle = () => {

    const [loading, setLoading] = useState(true);
    const [vehiclelist, setVehicleList] = useState([]);

        useEffect(() => {

            axios.get('api/view-vehicle').then(res => {
                // console.log(res.data.vehicle);
                if(res.status === 200)
                {
                    setVehicleList(res.data.vehicle);
                }
                setLoading(false);
            });
    },[]);


    const deleteVehicle = (e, id) => {
        e.preventDefault();

        const thisClick = e.currentTarget;
        thisClick.innerText = 'Deleting...';

        axios.delete(`/api/delete-vehicle/${id}`).then(res => {
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




    var viewvehicle_HTML_TABLE = "";

    if(loading)
    {
        return <h4>Loading Vehicle....</h4>
    }
    else
    {
        viewvehicle_HTML_TABLE = 
        vehiclelist.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category_id}</td>
                    <td>{item.lc_number}</td>
                    <td>{item.description}</td>
                    <td>{item.photo}</td>
                    <td>{item.status}</td>
                    <td>
                        <Link to={`edit-vehicle/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button"  onClick={ (e)=> deleteVehicle(e, item.id)}  className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div className="container px-4">
            <div className="card">
                <div className="card-header">
                    <h4>Vehcile List
                        <Link to="/admin/add-vehicle" className="btn btn-primary btn-sm float-end">Add Vehicle</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category ID</th>
                                <th>License No</th>
                                <th>Description</th>
                                <th>Photo</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewvehicle_HTML_TABLE}
                        </tbody>
                    </table>
                </div>            

            </div>
        </div>

    )
}

export default ViewVehicle;