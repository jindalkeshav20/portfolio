import React, { useEffect, useState } from 'react';
import Banner from '../Banner'
import Service from './Service'
import { Helmet } from 'react-helmet';

const Services = () => {

    return (
        <>
            <Helmet>
                <title>Keshav Jindal Services | Full Stack Web Developer | MERN Stack Developer</title>
                <meta name="description" content="Keshav Jindal offers expert Full Stack Web Development, MERN Stack Development, and Backend Development services tailored to your business needs." />
                <meta property="canonical" content="/services" />
                <meta name="keywords" content="Web Development Services" />
                <meta name="keywords" content="Keshav Jindal Web Development" />
                <meta name="keywords" content="MERN Stack Development" />
                <meta name="keywords" content="Consulting" />

                {/* Open Graph */}
                <meta property="og:title" content="Keshav Jindal Services | Full Stack Web Developer | MERN Stack Developer" />
                <meta property="og:description" content="Keshav Jindal offers expert Full Stack Web Development, MERN Stack Development, and Backend Development services tailored to your business needs." />
                <meta property="og:image" content="images/me.png" />
                <meta property="og:url" content="/services" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Keshav Jindal Services | Full Stack Web Developer | MERN Stack Developer" />
                <meta name="twitter:description" content="Keshav Jindal offers expert Full Stack Web Development, MERN Stack Development, and Backend Development services tailored to your business needs." />
                <meta name="twitter:image" content="images/me.png" />

            </Helmet>
            <main class="site-content" id="content">
                <Banner heading="Services" />
                <Service />
            </main>
        </>
    )
}

export default Services