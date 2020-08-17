import React from 'react';
import { Link } from 'react-router-dom';

export default function NvarBar() {

    return (
        <header>
            <div className="header-area ">
                <div className="header-top_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="short_contact_list">
                                    <ul>
                                        <li><a href="#">+880 4664 216</a></li>
                                        <li><a href="#">Mon - Sat 10:00 - 7:00</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-4 ">
                                <div className="social_media_links">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link to="/">home</Link></li>
                                            <li><Link to="/about">about</Link></li>
                                            <li><Link to="/blogs">blog</Link></li>
                                            <li><a href="#">pages <i className="ti-angle-down" /></a>
                                                <ul className="submenu">
                                                    <li><Link to="/elements">elements</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to="/services">services</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    );
}