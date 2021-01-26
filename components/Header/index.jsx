import React from 'react'

const NavBar = () => {
    return (
        <header id="header-v1" className="navbar-wrapper">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-default">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="navbar-header">
                                    <div className="navbar-brand">
                                        <h1>
                                            <a href="/">
                                                {/* <img src="images/logo.jpg" alt="LIBRARIA" /> */}
                                                ELPASMI
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {/* <!-- Header Topbar --> */}
                                <div className="header-topbar hidden-sm hidden-xs">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="topbar-info">
                                                <a href="tel:+61-3-8376-6284"><i className="fa fa-phone"></i>+61-3-8376-6284</a>
                                                <span>/</span>
                                                <a href="mailto:support@libraria.com"><i className="fa fa-envelope"></i>support@elpasmi.com</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="topbar-links">
                                                <a href="/login"><i className="fa fa-lock"></i>Login / Register</a>
                                                <span>|</span>
                                                <div className="header-cart dropdown">
                                                    <a data-toggle="dropdown" className="dropdown-toggle" href="/">
                                                        <i className="fa fa-shopping-cart"></i>
                                                        <small>0</small>
                                                    </a>
                                                    <div className="dropdown-menu cart-dropdown">
                                                        <ul>
                                                            <li className="clearfix">
                                                                <img src="images/header-cart-image-01.jpg"
                                                                     alt="cart item"/>
                                                                <div className="item-info">
                                                                    <div className="name">
                                                                        <a href="/">The Great Gatsby</a>
                                                                    </div>
                                                                    <div className="author"><strong>Author:</strong> F.
                                                                        Scott Fitzgerald
                                                                    </div>
                                                                    <div className="price">1 X $10.00</div>
                                                                </div>
                                                                <a className="remove" href="/"><i
                                                                    className="fa fa-trash-o"></i></a>
                                                            </li>
                                                            <li className="clearfix">
                                                                <img src="images/header-cart-image-02.jpg"
                                                                     alt="cart item"/>
                                                                <div className="item-info">
                                                                    <div className="name">
                                                                        <a href="/">The Great Gatsby</a>
                                                                    </div>
                                                                    <div className="author"><strong>Author:</strong> F.
                                                                        Scott Fitzgerald
                                                                    </div>
                                                                    <div className="price">1 X $10.00</div>
                                                                </div>
                                                                <a className="remove" href="/"><i
                                                                    className="fa fa-trash-o"></i></a>
                                                            </li>
                                                            <li className="clearfix">
                                                                <img src="images/header-cart-image-03.jpg"
                                                                     alt="cart item"/>
                                                                <div className="item-info">
                                                                    <div className="name">
                                                                        <a href="/">The Great Gatsby</a>
                                                                    </div>
                                                                    <div className="author"><strong>Author:</strong> F.
                                                                        Scott Fitzgerald
                                                                    </div>
                                                                    <div className="price">1 X $10.00</div>
                                                                </div>
                                                                <a className="remove" href="/"><i
                                                                    className="fa fa-trash-o"></i></a>
                                                            </li>
                                                        </ul>
                                                        <div className="cart-total">
                                                            <div className="title">SubTotal</div>
                                                            <div className="price">$30.00</div>
                                                        </div>
                                                        <div className="cart-buttons">
                                                            <a href="/cart" className="btn btn-dark-gray">View Cart</a>
                                                            <a href="/checkout" className="btn btn-primary">Checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-collapse hidden-sm hidden-xs">
                                    <ul className="nav navbar-nav">
                                        <li className="active">
                                            <a data-toggle="dropdown" className="dropdown-toggle disabled"
                                               href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/books">Books</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="news-events-list-view.html">News &amp; Events</a>
                                        </li>
                                        <li>
                                            <a href="/blogs">Blog</a>
                                        </li>
                                        <li><a href="/donations">Donations</a></li>

                                        <li><a href="/aboutus">About Us</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu hidden-lg hidden-md">
                            <a href="#mobile-menu"><i className="fa fa-navicon"></i></a>
                            <div id="mobile-menu">
                                <ul>
                                    <li className="mobile-title">
                                        <h4>Navigation</h4>
                                        <a href="/" className="close"> </a>
                                    </li>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/books">Books &amp; Media</a>
                                    </li>
                                    <li>
                                        <a href="/events">News &amp; Events</a>
                                    </li>
                                    <li>
                                        <a href="/blogs">Blog</a>
                                    </li>
                                    <li><a href="/donations">Donations</a></li>

                                    <li><a href="/aboutus">About Us</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar
