import React from 'react'
import Banner from '../Banner'
import { Helmet } from 'react-helmet';

const Gallery = () => {
  return (
    <>
    <Helmet>
        <title>Gallery - Keshav Jindal</title>
        <meta name="description" content="Explore the gallery of Keshav Jindal's work and projects." />
        <meta property="canonical" content="/gallery" />
        <meta name="keywords" content="Web Development Services" />
        <meta name="keywords" content="Keshav Jindal Web Development" />
        <meta name="keywords" content="MERN Stack Development" />
        <meta name="keywords" content="Portfolio Gallery" />

        {/* Open Graph */}
        <meta property="og:title" content="Gallery - Keshav Jindal" />
        <meta property="og:description" content="Keshav Jindal Gallery." />
        <meta property="og:image" content="images/me.png" />
        <meta property="og:url" content="/gallery" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery - Keshav Jindal" />
        <meta name="twitter:description" content="Keshav Jindal Gallery." />
        <meta name="twitter:image" content="images/me.png" />

       
        </Helmet>
        <main class="site-content" id="content">
            <Banner heading="Gallery" />
            <section
                className="breadcrumb_area"
                style={{
                    backgroundColor: "rgb(20, 12, 28)"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb_content d-flex flex-column align-items-center">
                                <h2 className="title wow fadeInUp" data-wow-delay=".3s">
                                    gallery
                                </h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    </>
  )
}

export default Gallery