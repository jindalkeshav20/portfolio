import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Works from './Works'
import Expirence from './Expirence'
import Skills from './Skills'

import Blogs from './Blogs'
import Contact from '../Contact'
import Testimonial from './Testimonial'
import { Helmet } from 'react-helmet';


const Home = ({ ExpireneData, EducationData }) => {
  return (
    <>
      <Helmet>
        <title>Keshav Jindal | Software Engineer | Full Stack (MERN)</title>
        <meta name="description" content="Keshav Jindal - Associate Software Engineer at Accenture. Full Stack Web Developer specializing in React.js, Node.js, and SQL. Building scalable web applications with precision and passion." />
        <meta name="keywords" content="Keshav Jindal Developer, Full Stack Web Developer, MERN Stack Developer, React Developer" />

        {/* Open Graph */}
        <meta property="og:title" content="Keshav Jindal | Full Stack Web Developer | MERN Stack Developer" />
        <meta property="og:description" content="Keshav Jindal - Associate Software Engineer at Accenture. Full Stack Web Developer specializing in React.js, Node.js, and SQL." />
        <meta property="og:image" content="images/me.png" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Keshav Jindal | Full Stack Web Developer | MERN Stack Developer" />
        <meta name="twitter:description" content="Keshav Jindal - Associate Software Engineer at Accenture. Full Stack Web Developer specializing in React.js, Node.js, and SQL." />
        <meta name="twitter:image" content="images/me.png" />
      </Helmet>
      <main class="site-content" id="content">
        <Banner />
        <Skills colorstyle="" />
        {/* <Services /> */}
        <Expirence ExpireneData={ExpireneData} EducationData={EducationData} />
        <Works />
        {/* <Testimonial/> */}
        {/* <Blogs /> */}
        <Contact />
      </main>
    </>
  )
}

export default Home