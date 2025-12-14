import React from 'react'
import Banner from '../Banner'
import Works from '../home/Works'
import { Helmet } from 'react-helmet';

const Portfolio = () => {
    return (
        <>

            <Helmet>
                <title>Keshav Jindal Portfolio | Full Stack Web Developer | MERN Stack Developer</title>
                <meta name="description" content="Explore the portfolio of Keshav Jindal, a Full Stack Web Developer specializing in React.js, Node.js, and SQL, showcasing dynamic web applications." />

                <meta property="canonical" content="/portfolio" />
                <meta name="keywords" content="Keshav Jindal Portfolio" />
                <meta name="keywords" content="Web Development Projects" />
                <meta name="keywords" content="Keshav Jindal Full Stack Web Developer" />

                {/* Open Graph */}
                <meta property="og:title" content="Keshav Jindal Portfolio | Full Stack Web Developer | MERN Stack Developer" />
                <meta property="og:description" content="Explore the portfolio of Keshav Jindal, a Full Stack Web Developer specializing in React.js, Node.js, and SQL, showcasing dynamic web applications." />
                <meta property="og:image" content="images/me.png" />
                <meta property="og:url" content="/portfolio" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Keshav Jindal Portfolio | Full Stack Web Developer | MERN Stack Developer" />
                <meta name="twitter:description" content="Explore the portfolio of Keshav Jindal, a Full Stack Web Developer specializing in React.js, Node.js, and SQL, showcasing dynamic web applications." />
                <meta name="twitter:image" content="images/me.png" />

            </Helmet>
            <main class="site-content" id="content">
                <Banner heading="Portfolio" />
                <Works />

            </main>
        </>
    )
}

export default Portfolio