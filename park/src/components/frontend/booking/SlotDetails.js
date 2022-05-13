// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import swal from "sweetalert";
// import { Link, useHistory } from "react-router-dom";



// function SlotDetails(props) {

//     const history = useHistory();
//     const [loading, setLoading] = useState(true);
//     const [slottrans, setSlottrans] = useState([]);

//     const [duration, setDuration] = useState(1)


//     useEffect(() => {
//         let isMounted = true;

//         const slot_details = props.match.params.guest_name;

//         axios.get(`/api/view-slot`).then(res => {
//             if (isMounted) {
//                 if (res.data.status === 200) {
//                     // console.log(res.data.setSlottrans);
//                     setSlottrans(res.data.slottrans);
//                     setLoading(false);
//                 }

//                 else if (res.data.status === 404) {
//                     history.push('/booking');
//                     swal("Oops!", res.data.message, "error");
//                 }
//             }
//         });

//         return () => {
//             isMounted = false;
//         }

//     }, [props.match.params.geust_name, history]);



//     const handleDecrement = () => {
//         if (duration > 1) {
//         setDuration(prevCount => prevCount - 1);
//         }
//     }
//     const handleIncrement = () => {
//         if (duration < 10) {
//         setDuration(prevCount => prevCount + 1);
//         }
//     }


//     const submitAddtobook = (e) => {
//         e.preventDefault();

//         const data = {
            
//         }
//     }



//     if (loading) {
//         return <h1>Loading Booking for Guest...</h1>
//     }
//     else {
        

//     }



//     return (
//         <div>
//             <div className="py-3 bg-warning">
//                 <div className="container">
//                     <h6>Booking / Slot / Details</h6>
//                 </div>
//             </div>

//             <div className="py-3">
//                 <div className="container">
//                     <div className="row">
                        
//                         <div className="col-md-4 border-end">
//                             <img src="" alt="Guest Image" className="w-100" />
//                         </div>
                        
//                         <div className="col-md-8">
//                             <h4>
//                                 Slot Details
//                                 {/* <span className="float-end badge btn-sm btn-danger badge-pil">Brand</span> */}
//                             </h4>
//                             <p>Slot Description</p>
//                             <h4 className="mb-1">
//                                 Rs: 30
//                                 {/* <s className="ms-2">Rs: </s> */}
//                             </h4>
//                             <div>
//                                 {/* <label className="btn-sm btn-success px-4 mt-2">In slot </label> */}

//                                 <div className="row">
//                                     <div className="col-md-3">
//                                         <div className="input-group">
//                                             <button type="button"  onClick={handleDecrement} className="input-group-text">-</button>
//                                             <div type="text" className="form-control text-center">
//                                             {duration}
//                                             </div>
//                                             {/* <div>{duration}</div> */}
//                                             <button type="button"  onClick={handleIncrement} className="input-group-text">+</button>
//                                         </div>
//                                     </div>

//                                     {/* <div className="col-md-3">
//                                         <button type="button" className="btn btn-sm btn-success w-100">Add Slot</button>
//                                     </div> */}
//                                 </div>          
//                             </div>

//                             <button type="button" className="btn btn-danger mt-3" onClick={submitAddtobook} >Add to book</button>

//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     )


// }

// export default SlotDetails;