import React from 'react'
import Banner from '../Banner'
import Blogs from './Blogs'
import { Helmet } from 'react-helmet';


const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog - Keshav Jindal</title>
                <meta name="description" content="Read the latest articles and insights from Keshav Jindal on web development and technology." />
                <meta property="canonical" content="/blog" />
                <meta name="keywords" content="Blog Keshav Jindal" />
                <meta name="keywords" content="Web Development" />
                <meta name="keywords" content="Technology" />
                <meta name="keywords" content="Keshav Jindal Full Stack Web Developer" />

                {/* Open Graph */}
                <meta property="og:title" content="Blog - Keshav Jindal" />
                <meta property="og:description" content="Read the latest articles and insights from Keshav Jindal on web development and technology." />
                <meta property="og:image" content="images/me.png" />
                <meta property="og:url" content="/blog" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog - Keshav Jindal" />
                <meta name="twitter:description" content="Read the latest articles and insights from Keshav Jindal on web development and technology." />
                <meta name="twitter:image" content="images/me.png" />

                {/* Structured Data */}
                {/* <script type="application/ld+json">
                    {`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog - Keshav Jindal",
            "description": "Read the latest articles and insights from Keshav Jindal on web development and technology.",
            "url": "/blog"
          }
        `}
                </script> */}
            </Helmet>
            <main class="site-content" id="content">
                <Banner heading="Blog" />
                <Blogs />
            </main>
        </>
    )
}

export default Blog