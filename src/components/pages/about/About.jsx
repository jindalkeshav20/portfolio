import React, { useEffect, useState } from 'react';
import Banner from '../Banner'
import Resume from './Resume'
import Skills from '../home/Skills'
import Counter from './Counter'
import Project from './Project'
import { WOW } from 'wowjs';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';

const About = ({ ExpireneData, EducationData }) => {

    useEffect(() => {
        // Initialize WOW.js
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true,
        });
        wow.init();

        // GSAP Preloader Animation
        const svg = document.getElementById('preloaderSvg');
        const svgText = document.querySelector('.hero-section .intro_text svg text');
        const tl = gsap.timeline({
            onComplete: startStrokeAnimation,
        });

        const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

        tl.to('.preloader-heading .load-text , .preloader-heading .cont', {
            delay: 1.5,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.5,
            attr: { d: curve },
            ease: 'power2.easeIn',
        }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: 'power2.easeOut',
        });
        tl.to('.preloader', {
            y: -1500,
        });
        tl.to('.preloader', {
            zIndex: -1,
            display: 'none',
        });

        function startStrokeAnimation() {
            if (svgText) {
                svgText.classList.add('animate-stroke');
            }
        }
    }, []);
    return (
        <>
            <Helmet>
                <title>About Keshav Jindal | Full Stack Web Developer | MERN Stack Developer</title>
                <meta name="description" content="Keshav Jindal is an Associate Software Engineer at Accenture, skilled in full-stack development using React.js, Node.js, and SQL. Building scalable web applications with clean architecture and performance optimization." />
                <link rel="canonical" href="/about" />
                <meta name="keywords" content="About Keshav Jindal" />
                <meta name="keywords" content="MERN Stack Development" />
                <meta name="keywords" content="Keshav Jindal Full Stack Web Developer" />
                <meta name="keywords" content="React.js Developer" />
                <meta name="keywords" content="Node.js Developer" />
                <meta name="keywords" content="Associate Software Engineer Accenture" />

                {/* Open Graph */}
                <meta property="og:title" content="About Keshav Jindal | Full Stack Web Developer | MERN Stack Developer" />
                <meta property="og:description" content="Keshav Jindal is an Associate Software Engineer at Accenture, skilled in full-stack development using React.js, Node.js, and SQL." />
                <meta property="og:image" content="images/me.png" />
                <meta property="og:url" content="/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Keshav Jindal | Full Stack Web Developer | MERN Stack Developer" />
                <meta name="twitter:description" content="Keshav Jindal is an Associate Software Engineer at Accenture, skilled in full-stack development using React.js, Node.js, and SQL." />
                <meta name="twitter:image" content="images/me.png" />

            </Helmet>
            <main class="site-content" id="content">
                <Banner heading="About" />
                <Resume ExpireneData={ExpireneData} EducationData={EducationData} />
                <Skills colorstyle="style-3" />
                {/* <Counter /> */}
                <Project />

            </main>
        </>
    )
}

export default About