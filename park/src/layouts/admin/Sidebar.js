import React from "react";
import {Link} from 'react-router-dom'



const Sidebar = () => {

    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
                {/* <div className="sb-sidenav-menu-heading">Core</div> */}
                <Link className="nav-link" to="/admin/dashboard">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Dashboard
                </Link>
                {/* <Link className="nav-link" to="/admin/add-owner">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Owner
                </Link> */}
                <Link className="nav-link" to="/admin/view-owner">
                    <div className="sb-nav-link-icon"><i className= "fas fa-user-check"></i></div>
                     Owner
                </Link>

                {/* <Link className="nav-link" to="/admin/add-guest">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Guest
                </Link> */}

                <Link className="nav-link" to="/admin/view-guest">
                    <div className="sb-nav-link-icon"><i className="fas fa-id-card"></i></div>
                     Guest
                </Link>

                {/* <Link className="nav-link" to="/admin/add-slot">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Slot
                </Link> */}

                <Link className="nav-link" to="/admin/view-slot">
                    <div className="sb-nav-link-icon"><i className="fas fa-check-to-slot"></i></div>
                     Slot
                </Link>

                {/* <Link className="nav-link" to="/admin/add-vehicle">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Slot
                </Link> */}

                <Link className="nav-link" to="/admin/view-vehicle">
                    <div className="sb-nav-link-icon"><i className="fas fa-car"></i></div>
                     Vehicle
                </Link>

                {/* <Link className="nav-link" to="/admin/add-slottrans">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Slot
                </Link> */}

                <Link className="nav-link" to="/admin/view-slottrans">
                    <div className="sb-nav-link-icon"><i className="fas fa-list-check"></i></div>
                    View Slot Transaction
                </Link>


                

                {/* <div className="sb-sidenav-menu-heading">Interface</div>
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Layouts
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link> */}
                {/* <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="layout-static.html">Static Navigation</Link>
                        <Link className="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
                    </nav>
                </div> */}
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                    Pages
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                            Authentication
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </Link>
                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/login">Login</Link>
                                <Link className="nav-link" to="/register">Register</Link>
                                {/* <Link className="nav-link" to="password.html">Forgot Password</Link> */}
                            </nav>
                        </div>
                        <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                            Error
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </Link>
                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/403">403 Page</Link>
                                <Link className="nav-link" to="/404">404 Page</Link>
                                {/* <Link className="nav-link" to="500.html">500 Page</Link> */}
                            </nav>
                        </div>
                    </nav>
                </div>
                {/* <div className="sb-sidenav-menu-heading">Addons</div> */}
                {/* <Link className="nav-link" to="charts.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                    Charts
                </Link> */}
                {/* <Link className="nav-link" to="tables.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                    Tables
                </Link> */}
            </div>
        </div>
        
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Admin
        </div>
    </nav>
    );
}

export default Sidebar;