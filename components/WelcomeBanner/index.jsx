import React from 'react'

const WelcomeBanner = () => {
    return (
        <div data-ride="carousel" className="carousel slide" id="home-v1-header-carousel">

            <div className="carousel-inner">
                <div className="item active">
                    <figure>
                        <img alt="Home Slide" src="/images/disasters/1.jpeg"/>
                    </figure>
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Welcome to Elpasmi</h3>
                            <h2>Charity is a simple method to show Kindness</h2>
                            <p>Comment Organiser Toutes Les contrees D'afrique a se regrouper sur un meme objectif</p>
                            <div className="slide-buttons hidden-sm hidden-xs">
                                <a href="/" className="btn btn-default">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <figure>
                        <img alt="Home Slide" src="images/disasters/2.jpeg"/>
                    </figure>
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Welcome to Elpasmi</h3>
                            <h2>La solidarite participative mondiale</h2>
                            <p>Comment Organiser Toutes Les contrees D'afrique a se regrouper sur un meme objectif.</p>
                            <div className="slide-buttons hidden-sm hidden-xs">
                                <a href="/" className="btn btn-primary">Read More</a>
                                <a href="/" className="btn btn-default">Make a Difference</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <figure>
                        <img alt="Home Slide" src="/images/header-slider/home-v1/header-slide.jpg"/>
                    </figure>
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Welcome to Elpasmi</h3>
                            <h2>La solidarite participative mondiale</h2>
                            <p>Comment Organiser Toutes Les contrees D'afrique a se regrouper sur un meme objectif</p>
                            <div className="slide-buttons hidden-sm hidden-xs">
                                <a href="/" className="btn btn-primary">Read More</a>
                                <a href="/" className="btn btn-default">Make a Difference</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a className="left carousel-control" href="#home-v1-header-carousel" data-slide="prev"> </a>
            <a className="right carousel-control" href="#home-v1-header-carousel" data-slide="next"> </a>
        </div>
    )
};

export default WelcomeBanner;
