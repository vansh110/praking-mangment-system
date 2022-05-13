import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/logout').then(res => {
            if (res.data.status === 200) {

                localStorage.removeItem("auth_token");
                localStorage.removeItem('auth_name');
                swal("Sucess", res.data.message, "success");
                history.push('/')
            }
        });
    }

    var AuthButton = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButton = (
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login" >Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/register" >Register</Link>
                </li>
            </ul>
        )
    }
    else {
        AuthButton = (
            <li className="nav-item">
                <button type="button" onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white" >Logout</button>
            </li>
        )
    }


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Park Portal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-right  my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Ownerbooking">OwnerBooking</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Guestt">Guest</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/ViewGuestt">Guest</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Booking">Booking</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Bk">GuestBooking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Payment">Payment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto" >
                        {AuthButton}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;