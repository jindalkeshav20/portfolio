import React from 'react'
import Banner from './Banner'
import { Helmet } from 'react-helmet';

const Resume = () => {
  return (
    <>
    <Helmet>
                <title>Keshav Jindal Resume | Full Stack Web Developer | MERN Stack Developer</title>
                <meta name="description" content="Explore the resume of Keshav Jindal, an Associate Software Engineer at Accenture. Full Stack Web Developer specializing in React.js, Node.js, and SQL." />

                <meta property="canonical" content="/resume" />
                <meta name="keywords" content="Keshav Jindal Resume" />
                <meta name="keywords" content="MERN Stack Development" />
                <meta name="keywords" content="Technology" />
                <meta name="keywords" content="Keshav Jindal Full Stack Web Developer" />

                {/* Open Graph */}
                <meta property="og:title" content="Keshav Jindal Resume | Full Stack Web Developer | MERN Stack Developer" />
                <meta property="og:description" content="Explore the resume of Keshav Jindal, an Associate Software Engineer at Accenture. Full Stack Web Developer specializing in React.js, Node.js, and SQL." />
                <meta property="og:image" content="images/me.png" />
                <meta property="og:url" content="/resume" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Keshav Jindal Resume | Full Stack Web Developer | MERN Stack Developer" />
                <meta name="twitter:description" content="Explore the resume of Keshav Jindal, an Associate Software Engineer at Accenture. Full Stack Web Developer specializing in React.js, Node.js, and SQL." />
                <meta name="twitter:image" content="images/me.png" />

            </Helmet>
      <main class="site-content" id="content">
                <Banner heading="Resume" />
                <div className="container py-5">
                    <img src="images/KeshavJindalResume.jpg" className='w-100' alt="Keshav Jindal Resume" />
                </div>
            </main>
    </>
  )
}

export default Resume