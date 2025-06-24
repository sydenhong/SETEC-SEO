import React, { useEffect } from 'react';
import 'admin-lte/dist/css/adminlte.min.css'; // Ensure styles are loaded
import 'admin-lte/dist/js/adminlte.min.js';
import MenuSideBar from './MenuSideBar';
import $ from 'jquery';
import { Link } from '@inertiajs/react';

const AdminLTELayoutGuest = ({ breadcrumb, children }) => {
    useEffect(() => {
        $('[data-toggle="dropdown"]').dropdown();
        $('body').attr('class', 'hold-transition layout-top-nav'); // jQuery way
    }, []);

    return (
        <div className="wrapper">
            {/* <!-- Navbar --> */}
            <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div class="container">
                    <a href="/" class="navbar-brand">
                        <img width={'50px'} src={`/images/avatar.png`} alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{"opacity": "0.8"}} />
                        {/* <span class="brand-text font-weight-light">AdminLTE 3</span> */}
                    </a>

                    <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse order-3" id="navbarCollapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link href="/" class="nav-link">HOME</Link>
                            </li>
                            {/* <li class="nav-item">
                                <a href="/posts" class="nav-link">POST</a>
                            </li> */}
                        </ul>

                        {/* <!-- SEARCH FORM --> */}
                        <form class="form-inline ml-0 ml-md-3">
                            <div class="input-group input-group-sm">
                                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div class="input-group-append">
                                        <button class="btn btn-navbar" type="submit">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <!-- /.navbar --> */}

            {/* Content Wrapper */}
            <div className="content-wrapper">
                {breadcrumb && breadcrumb}
                <section className="content">{children}</section>
            </div>

            {/* Footer */}
            <footer className="main-footer">
                <strong>Copyright &copy; 2025</strong> All rights reserved.
            </footer>
        </div>
    );
};

export default AdminLTELayoutGuest;
