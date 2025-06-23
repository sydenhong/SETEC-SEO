import React, { useEffect } from 'react';
import 'admin-lte/dist/css/adminlte.min.css'; // Ensure styles are loaded
import 'admin-lte/dist/js/adminlte.min.js';
import MenuSideBar from './MenuSideBar';
import $ from 'jquery';
import { Link } from '@inertiajs/react';

const AdminLTELayout = ({breadcrumb, children }) => {
    useEffect(() => {
        // Ensure dropdowns, tooltips, and modals work
        $('[data-toggle="dropdown"]').dropdown();
        $('body').attr('class', 'hold-transition sidebar-mini'); // jQuery way
    }, []);
    
    return (
        <div className="wrapper">
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
                {/* <!-- Right navbar links --> */}
                <ul className="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <Link href={route('chat.index')} className="nav-link">
                            <i class="far fa-comments"></i>
                            <span class="badge badge-danger navbar-badge">3</span>
                        </Link>
                    </li>
                    {/* Dropdown */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-user-circle"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <Link href={route('profile.edit')} className="dropdown-item">Profile</Link>
                            <div className="dropdown-divider"></div>
                            <Link
                                className="dropdown-item"
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>

            <MenuSideBar />

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

export default AdminLTELayout;
