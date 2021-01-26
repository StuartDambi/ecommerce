import App from 'next/app';
import Head from "next/head";
import {Footer, Header} from "../components";

class MyApp extends App {
    render() {
        const {Component, PageProps} = this.props;
        return (
            <div>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1"/>
                    <meta name="description"
                          content="Elpasmi is an organization that is aimed at distributing relief aid allover africa"/>
                    <title>ELPASMI ORGANISATION</title>

                    <link href="/images/favicon.ico" rel="icon" type="image/x-icon"/>

                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i%7CLato:100,100i,300,300i,400,400i,700,700i,900,900i"
                        rel="stylesheet"/>
                    <link href="/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>


                    <link href="/css/mmenu.css" rel="stylesheet" type="text/css"/>
                    <link href="/css/mmenu.positioning.css" rel="stylesheet" type="text/css"/>

                    <link href="/css/style.css" rel="stylesheet" type="text/css"/>
                </Head>
                <Header />
                <Component {...PageProps} />
                <Footer />

                <script type="text/javascript" src="/js/jquery-1.12.4.min.js"></script>

                <script type="text/javascript" src="/js/jquery-ui.min.js"></script>

                <script type="text/javascript" src="/js/jquery.easing.1.3.js"></script>

                <script type="text/javascript" src="/js/bootstrap.min.js"></script>

                <script type="text/javascript" src="/js/mmenu.min.js"></script>

                <script type="text/javascript" src="/js/harvey.min.js"></script>

                <script type="text/javascript" src="/js/waypoints.min.js"></script>

                <script type="text/javascript" src="/js/facts.counter.min.js"></script>

                <script type="text/javascript" src="/js/mixitup.min.js"></script>

                <script type="text/javascript" src="/js/owl.carousel.min.js"></script>

                <script type="text/javascript" src="/js/accordion.min.js"></script>

                <script type="text/javascript" src="/js/responsive.tabs.min.js"></script>

                <script type="text/javascript" src="/js/responsive.table.min.js"></script>

                <script type="text/javascript" src="/js/masonry.min.js"></script>

                <script type="text/javascript" src="/js/carousel.swipe.min.js"></script>

                <script type="text/javascript" src="/js/bxslider.min.js"></script>

                <script type="text/javascript" src="/js/main.js"></script>
            </div>
        )
    }
};

export default MyApp;