import React, { useEffect, useState } from "react";
import { WOW } from "wowjs";
import { gsap } from "gsap";
import Counters from "../Counters";

const Banner = () => {
  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: true,
    });
    wow.init();

    // GSAP Preloader Animation
    const svg = document.getElementById("preloaderSvg");
    const svgText = document.querySelector(
      ".hero-section .intro_text svg text"
    );
    const tl = gsap.timeline({
      onComplete: startStrokeAnimation,
    });

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.easeOut",
    });
    tl.to(".preloader", {
      y: -1500,
    });
    tl.to(".preloader", {
      zIndex: -1,
      display: "none",
    });

    function startStrokeAnimation() {
      if (svgText) {
        svgText.classList.add("animate-stroke");
      }
    }
  }, []);

  return (
    <>
      {/* HERO SECTION START */}
      <section className="hero-section d-flex align-items-center" id="intro">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle" aria-label="Welcome">
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content-box">
                <span className="hero-sub-title">Hello, I'm Keshav Jindal</span>
                <h1 className="hero-title">Full Stack Developer</h1>
                <div className="hero-image-box d-md-none text-center">
                  <img
                    src="images/me.png"
                    alt="Keshav Jindal - Full Stack Web Developer"
                  />
                </div>
                <p className="lead">
                  Ambitious and detail-oriented Software Developer with hands-on
                  experience in building scalable, secure, and user-friendly web
                  applications using the MERN stack. Currently working as an
                  Associate Software Engineer at Accenture, with strong
                  expertise in full-stack development, API integrations, and
                  performance optimization. Passionate about solving real-world
                  problems, collaborating with cross-functional teams, and
                  delivering impactful digital solutions in fast-paced
                  environments.
                </p>
                <div className="button-box d-flex flex-wrap align-items-center">
                  <a
                    href="./images/KeshavJindalResume.pdf"
                    className="btn tj-btn-secondary"
                    download
                  >
                    Download CV <i className="flaticon-download" />
                  </a>
                  <ul className="ul-reset social-icons">
                    <li>
                      <a
                        href="https://github.com/jindalkeshav20"
                        aria-label="Keshav Jindal on GitHub"
                      >
                        <i className="fa-brands fa-github" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/keshav-jindal-605326202"
                        aria-label="Keshav Jindal on LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:jindalkeshav20@gmail.com"
                        aria-label="Email Keshav Jindal"
                      >
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+919971520309"
                        aria-label="Call Keshav Jindal"
                      >
                        <i className="fa-solid fa-phone" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="hero-image-box text-center">
                <img
                  src="images/me.png"
                  alt="Keshav Jindal Full Stack Web Developer"
                />
              </div>
            </div>
          </div>
          {/* <Counters /> */}
        </div>
      </section>

      {/* HERO SECTION END */}
    </>
  );
};

export default Banner;
