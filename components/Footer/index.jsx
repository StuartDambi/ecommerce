import React from 'react'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div id="footer-widgets">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 widget-container">
                            <div id="text-2" className="widget widget_text">
                                <h3 className="footer-widget-title">About Elpasmi</h3>
                                <span className="underline left"></span>
                                <div className="textwidget">
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking.
                                </div>
                                <address>
                                    <div className="info">
                                        <i className="fa fa-location-arrow"></i>
                                        <span>Kampala Road, Boulevard Suites, Kampala Uganda</span>
                                    </div>
                                    <div className="info">
                                        <i className="fa fa-envelope"></i>
                                        <span><a href="mailto:support@libraria.com">support@elpasmi.org</a></span>
                                    </div>
                                    <div className="info">
                                        <i className="fa fa-phone"></i>
                                        <span><a href="tel:33-755-715373">+ 33 755 715373</a></span>
                                    </div>
                                </address>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 widget-container">
                            <div id="nav_menu-2" className="widget widget_nav_menu">
                                <h3 className="footer-widget-title">Quick Links</h3>
                                <span className="underline left"></span>
                                <div className="menu-quick-links-container">
                                    <ul id="menu-quick-links" className="menu">
                                        <li><a href="/">Recent Events</a></li>
                                        <li><a href="/">History</a></li>
                                        <li><a href="/aboutus">Meet Our Staff</a></li>
                                        <li><a href="/">Board of Trustees</a></li>
                                        <li><a href="/">Budget</a></li>
                                        <li><a href="/">Annual Report</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix hidden-lg hidden-md hidden-xs tablet-margin-bottom"></div>
                        <div className="col-md-2 col-sm-6 widget-container">
                            <div id="text-4" className="widget widget_text">
                                <h3 className="footer-widget-title">Branches</h3>
                                <span className="underline left"></span>
                                <div className="timming-text-widget">

                                    <ul>
                                        <li><a href="/">Closings</a></li>
                                        <li><a href="/">Branches</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 widget-container">
                            <div className="widget twitter-widget">
                                <h3 className="footer-widget-title">Latest Tweets</h3>
                                <span className="underline left"></span>
                                <div id="twitter-feed">
                                    <ul>
                                        <li>
                                            <p><a href="/">@elpasmi</a> Sed ut perspiciatis unde omnis iste natus error
                                                sit voluptatem. <a href="/">template-libraria.com</a></p>
                                        </li>
                                        <li>
                                            <p><a href="/">@elpasmi</a> Sed ut perspiciatis unde omnis iste natus error
                                                sit voluptatem. <a href="/">template-libraria.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-text col-md-3">
                            <p><a href="https://github.com/StuartDambi">Stuart Dambi</a></p>
                        </div>
                        <div className="col-md-9 pull-right">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/books">Books</a></li>
                                <li><a href="/events">News &amp; Events</a></li>
                                <li><a href="/">Donations</a></li>
                                <li><a href="/aboutus">About Us</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
