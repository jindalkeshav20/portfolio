import React from 'react'
import Banner from '../Banner'
import Contact from '../Contact'
import { Helmet } from 'react-helmet';

const Contacts = () => {
    return (
        <>
            <Helmet>
                <title>Contact Keshav Jindal | Full Stack Web Developer | MERN Stack Developer</title>
                <meta name="description" content="Get in touch with Keshav Jindal, a Full Stack Web Developer specializing in React.js, Node.js, and SQL. Let's discuss your project and create something amazing together." />

                <meta property="canonical" content="/contact" />
                <meta name="keywords" content="Contact Keshav Jindal" />
                <meta name="keywords" content="Web Development Inquiries" />
                <meta name="keywords" content="Keshav Jindal Full Stack Web Developer" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Keshav Jindal | Full Stack Web Developer | MERN Stack Developer" />
                <meta property="og:description" content="Get in touch with Keshav Jindal, a Full Stack Web Developer specializing in React.js, Node.js, and SQL. Let's discuss your project and create something amazing together." />
                <meta property="og:image" content="images/me.png" />
                <meta property="og:url" content="/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Keshav Jindal | Full Stack Web Developer | MERN Stack Developer" />
                <meta name="twitter:description" content="Get in touch with Keshav Jindal, a Full Stack Web Developer specializing in React.js, Node.js, and SQL. Let's discuss your project and create something amazing together." />
                <meta name="twitter:image" content="images/me.png" />

            </Helmet>
            <main class="site-content" id="content">
                <Banner heading="Contact" />
                <Contact />

            </main>
        </>
    )
}

export default Contacts