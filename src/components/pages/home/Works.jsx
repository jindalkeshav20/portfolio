import React, { useEffect, useState } from "react";
import "wowjs";
import $ from "jquery";

const Works = () => {
  // const ProjectsData = [
  //   {
  //     img: "images/projects/10.png",
  //     title: "FTTunes.com",
  //     para: "A full-stack music distribution platform for artists and labels to upload, manage, and distribute tracks. Features role-based dashboards, JWT authentication, and automated email verification.",
  //     link: "https://fttunes.com/",
  //     alt: "FTTunes music distribution platform screenshot",
  //     category: "ReactJs"
  //   },
  //   {
  //     img: "images/projects/6.png",
  //     title: "FlyAbasin.com",
  //     para: "A travel booking platform offering real-time flight search, comparison, and booking. Integrated multiple flight APIs for seamless booking and secure payment processing.",
  //     link: "http://flyabasin.com/",
  //     alt: "FlyAbasin travel booking platform screenshot",
  //     category: "ReactJs"
  //   },
  //   {
  //     img: "images/projects/11.png",
  //     title: "Aloha POS",
  //     para: "Restaurant management and billing platform. Enhanced modules for order management, inventory control, and billing automation with optimized backend logic.",
  //     link: "#",
  //     alt: "Aloha POS restaurant management system",
  //     category: "ReactJs"
  //   },
  //   {
  //     img: "images/projects/4.png",
  //     title: "Yatri Service",
  //     para: "Building a seamless travel management system with ReactJs for the frontend and powerful backend functionalities.",
  //     link: "https://yatriservice.com/",
  //     alt: "Yatri Service website screenshot",
  //     category: "ReactJs"
  //   },
  //   {
  //     img: "images/projects/8.png",
  //     title: "BookurTicket",
  //     para: "Transforming the booking process with a user-friendly web interface and powerful backend management for travel services.",
  //     link: "https://bookurticket.com/",
  //     alt: "BookurTicket website screenshot",
  //     category: "ReactJs"
  //   },
  //   {
  //     img: "images/projects/1.jpeg",
  //     title: "V6co",
  //     para: "Building innovative solutions in home wellness and manufacturing through custom backend systems and user-friendly interfaces.",
  //     link: "https://v6co.com/",
  //     alt: "V6co homepage screenshot",
  //     category: "ReactJs"
  //   }
  // ];

  const ProjectsData = [
    {
      img: "images/projects/10.png",
      title: "LeloTrip",
      para: "A B2B travel portal designed to streamline business travel operations with efficient booking and management workflows.",
      link: "#",
      alt: "LeloTrip travel portal screenshot",
      category: "Web Development",
    },
    {
      img: "images/studiofinaltake.jpeg",
      title: "Studio Final Take",
      para: "A professional studio platform offering sound recording, dubbing, vocal sessions, and modeling services with online booking.",
      link: "#",
      alt: "Studio Final Take website screenshot",
      category: "Web Development",
    },
    {
      img: "images/unme.jpeg",
      title: "Unme",
      para: "A custom printing platform for personalized products including apparel, mugs, bottles, and visiting cards.",
      link: "#",
      alt: "Unme custom printing website screenshot",
      category: "Web Development",
    },
    {
      img: "images/projects/4.png",
      title: "Yatri Service",
      para: "A travel management system enabling seamless booking and operational efficiency through a modern web interface.",
      link: "https://yatriservice.com/",
      alt: "Yatri Service website screenshot",
      category: "Web Development",
    },
    {
      img: "images/projects/8.png",
      title: "BookurTicket",
      para: "Transforming the booking process with a user-friendly web interface and powerful backend management for travel services.",
      link: "https://bookurticket.com/",
      alt: "BookurTicket website screenshot",
      category: "ReactJs",
    },
    {
      img: "images/fttunes.jpeg",
      title: "FTTunes",
      para: "A music distribution platform that allows artists to upload and distribute tracks across major streaming services.",
      link: "https://fttunes.com/",
      alt: "FTTunes music distribution platform screenshot",
      category: "Full Stack",
    },
    {
      img: "images/thecasinoloot.jpeg",
      title: "The Casino Loot",
      para: "An affiliate platform for the casino and gaming industry featuring reviews, comparisons, guides, and exclusive offers.",
      link: "#",
      alt: "The Casino Loot platform screenshot",
      category: "Web Development",
    },
    {
      img: "images/flyabasin.jpeg",
      title: "Fly Abasin",
      para: "A comprehensive travel platform integrating flight, hotel, and tour APIs with agent dashboards and ticket generation.",
      link: "http://flyabasin.com/",
      alt: "Fly Abasin travel platform screenshot",
      category: "Full Stack",
    },
    {
      img: "images/kishkinda.jpeg",
      title: "Kishkinda Resort",
      para: "A resort booking platform offering detailed listings, smooth navigation, and exclusive travel deals.",
      link: "#",
      alt: "Kishkinda Resort booking platform screenshot",
      category: "Web Development",
    },
    {
      img: "images/projects/1.jpeg",
      title: "V6co",
      para: "Building innovative solutions in home wellness and manufacturing through custom backend systems and user-friendly interfaces.",
      link: "https://v6co.com/",
      alt: "V6co homepage screenshot",
      category: "ReactJs",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

  // useEffect(() => {
  //   function filterAnimation() {
  //     const activeBg = $(".portfolio-filter .button-group .active-bg");
  //     const element = $(".portfolio-filter .button-group .active");
  //     $(".portfolio-filter .button-group button").on("click", function () {
  //       const e = $(this);
  //       activeFilterBtn(activeBg, e);
  //     });
  //     activeFilterBtn(activeBg, element);
  //   }
  //   filterAnimation();

  //   function activeFilterBtn(activeBg, e) {
  //     if (!e.length) return;
  //     const leftOff = e.offset().left;
  //     const width = e.outerWidth();
  //     const menuLeft = $(".portfolio-filter .button-group").offset().left;
  //     e.siblings().removeClass("active");
  //     e.closest("button").siblings().addClass("active");
  //     activeBg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
  //   }
  // }, []);

  // const filteredProjects = ProjectsData.slice(0, visibleProjects);

  return (
    <>
      <section className="portfolio-section" id="works-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h4 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Recent Works
                </h4>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  A selection of real-world projects showcasing scalable,
                  production-ready web solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div
                className="portfolio-filter text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="button-group filter-button-group">
                  <button className="active">All Projects</button>
                  <div className="active-bg" />
                </div>
              </div> */}
              <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {ProjectsData.map((project, index) => (
                    <div
                      className={`portfolio-item ${project.category}`}
                      key={index}
                    >
                      <div className="image-box">
                        <img src={project.img} alt={project.alt} />
                      </div>
                      <div className="content-box">
                        <h3 className="portfolio-title">{project.title}</h3>
                        <p>{project.para}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* <button className="portfolio-link">View Project</button> */}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* {visibleProjects < ProjectsData.length && (
                <div className="text-center mt-4">
                  <button
                    className="load-more-btn btn tj-btn-secondary"
                    onClick={() => setVisibleProjects((prev) => prev + 6)}
                  >
                    Load More
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
