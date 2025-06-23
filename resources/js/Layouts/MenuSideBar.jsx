import { Link } from '@inertiajs/react';
import $ from 'jquery';
import 'admin-lte/dist/css/adminlte.min.css'; // Ensure styles are loaded
import 'admin-lte/dist/js/adminlte.min.js';
import { useEffect } from 'react';

export default function MenuSideBar({}) {
    useEffect(() => {
        // Ensure dropdowns, tooltips, and modals work
        $('[data-toggle="dropdown"]').dropdown();
    }, []);

    useEffect(() => {
        // Initialize AdminLTE sidebar treeview
        $('[data-widget="treeview"]').each(function () {
            $(this).Treeview('init');
        });
    }, []);

    return (
        <>
            {/* Sidebar */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link href="/" className="brand-link">
                    <span className="brand-text font-weight-light">ADMIN</span>
                </Link>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={'/images/avatar.png'} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <Link href="#" className="d-block">Alexander Pierce</Link>
                        </div>
                    </div>

                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <Link href={route('dashboard')} className={`nav-link ${route().current('dashboard') && 'active'}`}>
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className={`nav-item ${(route().current('post.index') || route().current('post.create')) && 'menu-open'}`}>
                                <a href="#" className={`nav-link ${(route().current('post.index') || route().current('post.create')) && 'active'}`}>
                                    <i className="nav-icon far fa-plus-square"></i>
                                    <p> POST
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link href={route('post.index')} className={`nav-link ${route().current('post.index') && 'active'}`}>
                                            <i className="fa-solid fa-list-ul nav-icon text-warning"></i>
                                            <p>LIST</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={route('post.create')} className={`nav-link ${route().current('post.create') && 'active'}`}>
                                            <i className="fa-regular fa-square-plus nav-icon text-info"></i>
                                            <p>CREATE</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <Link href="#" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Widgets
                                        <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li> */}
                            <li className="nav-header">SETTING</li>
                            <li className={`nav-item ${(route().current('categories.index') || route().current('categories.create')) && 'menu-open'}`}>
                                <a href="#" className={`nav-link ${(route().current('categories.index') || route().current('categories.create')) && 'active'}`}>
                                    <i className="nav-icon far fa-plus-square"></i>
                                    <p> CATEGORY
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link href={route('categories.index')} className={`nav-link ${route().current('categories.index') && 'active'}`}>
                                            <i className="fa-solid fa-list-ul nav-icon text-warning"></i>
                                            <p>LIST</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={route('categories.create')} className={`nav-link ${route().current('categories.create') && 'active'}`}>
                                            <i className="fa-regular fa-square-plus nav-icon text-info"></i>
                                            <p>CREATE</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}
