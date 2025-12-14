import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Banner = ({ heading, description }) => {
    return (
        <>
             {/* SEO Metadata */}
            {/* <Helmet>
                <title>{heading} | Keshav Jindal - Full Stack Web Developer</title>
                <meta name="description" content={description || `Explore ${heading} on Keshav Jindal - Full Stack Web Developer.`} />
                <meta property="og:title" content={heading} />
                <meta property="og:description" content={description || `Explore ${heading} on Keshav Jindal - Full Stack Web Developer.`} />
                <meta property="og:image" content="/path/to/your/image.jpg" />
                <meta property="og:url" content={window.location.href} />
            </Helmet> */}

            {/* START: Breadcrumb Area */}
            <section
                className="breadcrumb_area"
                style={{
                    backgroundImage: 'url("images/breadcrumb-bg.jpg")',
                    backgroundColor: "rgb(20, 12, 28)"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb_content d-flex flex-column align-items-center">
                                <h2 className="title wow fadeInUp" data-wow-delay=".3s">
                                    {heading}
                                </h2>
                                <nav
                                    className="breadcrumb_navigation wow fadeInUp"
                                    data-wow-delay=".5s"
                                    aria-label="Breadcrumb"
                                >
                                    <span>
                                        <Link to="/">Home</Link>
                                    </span>
                                    <i className="far fa-long-arrow-right" aria-hidden="true" />
                                    <span className="current-item" aria-current="page">{heading}</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END: Breadcrumb Area */}
        </>
    );
};

export default Banner;
