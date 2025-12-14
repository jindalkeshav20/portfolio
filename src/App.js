import React, { useEffect, useState } from "react";
import "./App.css";
import "./css/animate.min.css";
import "./css/bootstrap.min.css";
import "./css/font-awesome-pro.min.css";
import "./css/flaticon_gerold.css";
import "./css/nice-select.css";
import "./css/backToTop.css";
import "./css/owl.carousel.min.css";
import "./css/swiper.min.css";
import "./css/odometer-theme-default.css";
import "./css/magnific-popup.css";
import "./css/main.css";
import "./css/main-2.css";
import "./css/main-3.css";
import "./css/light-mode.css";
import "./css/meanmenu.css";
import "./css/responsive.css";
import "./css/responsive-2.css";
import "./css/responsive-3.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Services from "./components/pages/services/Services";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Contacts from "./components/pages/contact/Contacts";
import Blog from "./components/pages/blog/Blog";
import BlogDetail from "./components/pages/blog/BlogDetail";
import { WOW } from "wowjs";
import { gsap } from "gsap";
import Resume from "./components/pages/Resume";
import Gallery from "./components/pages/gallery/Gallery";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const ExpireneData = [
    {
      year: "Oct 2024 - Present",
      post: "Associate Software Engineer",
      location: "Accenture Solutions Pvt. Ltd.",
    },
    {
      year: "Jan 2024 - Oct 2024",
      post: "MERN Stack Developer Intern",
      location: "Eweblink Technologies LLP",
    },
    {
      year: "Oct 2023",
      post: "Freelancer",
      location: "Kishkinda Resort, Hotel Website",
    },
  ];
  const EducationData = [
    {
      year: "2020 - 2024",
      post: "Bachelor’s Of Technology (CSE)",
      location:
        "J.C BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY, YMCA, Faridabad (GPA: 8.68/10)",
    },
    {
      year: "2020",
      post: "Senior Secondary (XII), Science",
      location: "Central Board of Secondary Education (96.3%)",
    },
    {
      year: "2018",
      post: "Secondary (X), Science",
      location: "Haryana Board of School Education (93.5%)",
    },
  ];

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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home ExpireneData={ExpireneData} EducationData={EducationData} />
          }
        />
        <Route
          path="/about"
          element={
            <About ExpireneData={ExpireneData} EducationData={EducationData} />
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contacts />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/blog-detail" element={<BlogDetail />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
