import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { Helmet } from 'react-helmet';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isStickyOut, setIsStickyOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 300) {
        setIsSticky(true);
        setIsStickyOut(false);
      } else if (scroll < 500) {
        if (scroll < window.lastScrollTop) {
          setIsSticky(false);
          setIsStickyOut(true);
        }
      } else {
        setIsSticky(false);
      }
      window.lastScrollTop = scroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const svg = document.getElementById("preloaderSvg");
    const svgText = document.querySelector(".hero-section .intro_text svg text");

    const tl = gsap.timeline({
      onComplete: startStrokeAnimation,
    });

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    })
      .to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
      })
      .to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      })
      .to(".preloader", {
        y: -1500,
      })
      .to(".preloader", {
        zIndex: -1,
        display: "none",
      });

    function startStrokeAnimation() {
      if (svgText) {
        svgText.classList.add("animate-stroke");
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.classList.toggle('overflow-hidden', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  useEffect(() => {
    $('.switch').on('click', () => {
      setIsLightMode(prevMode => !prevMode);
    });

    const e = document.querySelector(".progress-wrap path");
    const t = e.getTotalLength();

    e.style.transition = e.style.WebkitTransition = "none";
    e.style.strokeDasharray = `${t} ${t}`;
    e.style.strokeDashoffset = t;

    const updateProgress = () => {
      const o = $(window).scrollTop();
      const r = $(document).height() - $(window).height();
      const i = t - (o * t) / r;
      e.style.strokeDashoffset = i;
    };

    updateProgress();
    $(window).scroll(updateProgress);

    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 50) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });

    $(".progress-wrap").on('click', (s) => {
      s.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 550);
      return false;
    });

    return () => {
      $('.switch').off('click');
      $(window).off('scroll');
      $(".progress-wrap").off('click');
    };
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light');
      $('.switch').addClass('switched');
    } else {
      document.body.classList.remove('light');
      $('.switch').removeClass('switched');
    }
  }, [isLightMode]);

  return (
    <>
      {/* <Helmet>
        <title>Keshav Jindal's Portfolio | Full Stack Web Developer</title>
        <meta name="description" content="Keshav Jindal's personal portfolio showcasing full stack web development skills. Contact for high-quality services." />
        <meta name="keywords" content="web development, MERN stack, portfolio, Keshav Jindal, full stack developer" />
        <meta name="author" content="Keshav Jindal" />
        <meta property="og:title" content="Keshav Jindal's Portfolio" />
        <meta property="og:description" content="Keshav Jindal's personal portfolio showcasing full stack web development skills." />
        <meta property="og:image" content="images/me.png" />
        <meta property="og:url" content="/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Keshav Jindal's Portfolio" />
        <meta name="twitter:description" content="Keshav Jindal's personal portfolio showcasing full stack web development skills." />
        <meta name="twitter:image" content="images/me.png" />
      </Helmet> */}

      <div className="preloader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>
        <div className="preloader-heading">
          <div className="load-text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      </div>
      <div className="progress-wrap" id="scrollUp">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <header className={`tj-header-area header-absolute ${isSticky ? 'sticky' : ''} ${isStickyOut ? 'sticky-out' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <Link to="/">
                  <img src="images/logo.png" alt="Keshav Jindal Portfolio Logo" />
                </Link>
              </div>
              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li>
                    <Link to="mailto:jindalkeshav20@gmail.com">jindalkeshav20@gmail.com</Link>
                  </li>
                </ul>
              </div>
              <div className="header-menu" id="headerMenu">
                <nav>
                  <ul>
                    <li 
                    // className="has-dropdown current-menu-ancestor"
                    >
                      <Link 
                      // className="current-menu-item"
                       to="/" onClick={closeMenu}
                      >Home</Link>
                      {/* <ul className="sub-menu d-none">
                        <li className="has-dropdown current-menu-ancestor">
                          <Link to="/" onClick={closeMenu}>Dark Mode</Link>
                          <ul className="sub-menu">
                            <li className="current-menu-item">
                              <Link to="/" onClick={closeMenu}>Home One</Link>
                            </li>
                            <li>
                              <Link to="/" onClick={closeMenu}>Home Two</Link>
                            </li>
                            <li>
                              <Link to="/" onClick={closeMenu}>Home Three</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/" onClick={closeMenu}>Light Mode</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/" onClick={closeMenu}>Home One</Link>
                            </li>
                            <li>
                              <Link to="/" onClick={closeMenu}>Home Two</Link>
                            </li>
                            <li>
                              <Link to="/" onClick={closeMenu}>Home Three</Link>
                            </li>
                          </ul>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to="/about" onClick={closeMenu}>About</Link>
                    </li>
                    {/* <li>
                      <Link to="/services" onClick={closeMenu}>Services</Link>
                    </li> */}
                    <li>
                      <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
                    </li>
                    {/* <li>
                      <Link to="/resume" onClick={closeMenu}>Resume</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link to="/blog" onClick={closeMenu}>Blog</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog" onClick={closeMenu}>Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-detail" onClick={closeMenu}>Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className={`mobile-menu d-lg-none ${isMenuOpen ? 'opened' : ''}`}>
                <nav className="mean-nav">
                  <ul>
                    <li className="has-dropdown current-menu-ancestor">
                      <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={closeMenu}>About</Link>
                    </li>
                    <li>
                      <Link to="/services" onClick={closeMenu}>Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio" onClick={closeMenu}>Portfolios</Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={closeMenu}>Blog</Link>
                    </li>
                    <li>
                      <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-button">
                <Link to="/contact" className="btn tj-btn-primary">
                  Hire Me!
                </Link>
              </div>
              <div className="menu-bar d-lg-none" onClick={toggleMenu}>
                <button className={isMenuOpen ? 'menu-bar-toggled' : ''}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
