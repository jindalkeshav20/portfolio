import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'magnific-popup';


const Services = () => {
    const [currentService, setCurrentService] = useState(0);
    const activeBgRef = useRef(null);
    const servicesWidgetRef = useRef(null);

    useEffect(() => {
        const serviceItems = $(".services-widget .service-item");

        function activeService(activeBg, e) {
            if (!e.length) return;

            const topOff = e.offset().top;
            const height = e.outerHeight();
            const menuTop = $(".services-widget").offset().top;

            e.closest(".service-item").removeClass("mleave");
            e.closest(".service-item").siblings().addClass("mleave");
            activeBg.css({ top: `${topOff - menuTop}px`, height: `${height}px` });
        }

        function serviceAnimation() {
            const activeBg = $(".services-widget .active-bg");
            let element = $(".services-widget .current");

            serviceItems.on("mouseenter", function () {
                const e = $(this);
                activeService(activeBg, e);
            });

            $(".services-widget").on("mouseleave", function () {
                element = $(".services-widget .current");
                activeService(activeBg, element);
                element.closest(".service-item").siblings().removeClass("mleave");
            });

            activeService(activeBg, element);
        }

        serviceAnimation();

        serviceItems.on("click", function () {
            serviceItems.removeClass("current");
            $(this).addClass("current");
            setCurrentService(serviceItems.index(this));
        });

        return () => {
            serviceItems.off("mouseenter mouseleave click");
        };
    }, []);

    useEffect(() => {
        $(".modal-popup").magnificPopup({
            type: "inline",
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: "auto",
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: "popup-mfp",
        });
    }, []);

    return (
        <>
            {/* SERVICES SECTION START */}
            <section className="services-section" id="services-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center">
                                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                                    My Design Expertise
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                Showcasing solutions across Backend, Branding, Web, and UI/UX design. Expertise in creating impactful, user-centered experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="services-widget position-relative" ref={servicesWidgetRef}>
                                <div className="service-item current d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".5s">
                                    <div className="left-box d-flex flex-wrap align-items-center">
                                        <span className="number">01</span>
                                        <h3 className="service-title">Branding Design</h3>
                                    </div>
                                    <div className="right-box">
                                        <p>
                                        I create impactful, cohesive visual identities that resonate, ensuring consistency across every user interaction.
                                        </p>
                                    </div>
                                    <i className="flaticon-up-right-arrow" />
                                    <button
                                        data-mfp-src="#service-wrapper"
                                        className="service-link modal-popup"
                                    />
                                </div>
                                <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".6s">
                                    <div className="left-box d-flex flex-wrap align-items-center">
                                        <span className="number">02</span>
                                        <h3 className="service-title">Web Design</h3>
                                    </div>
                                    <div className="right-box">
                                        <p>
                                        I design intuitive, user-centered interfaces that engage users, combining aesthetics with seamless functionality.

                                        </p>
                                    </div>
                                    <i className="flaticon-up-right-arrow" />
                                    <button
                                        data-mfp-src="#service-wrapper"
                                        className="service-link modal-popup"
                                    />
                                </div>
                                <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".7s">
                                    <div className="left-box d-flex flex-wrap align-items-center">
                                        <span className="number">03</span>
                                        <h3 className="service-title">UI/UX Design</h3>
                                    </div>
                                    <div className="right-box">
                                        <p>
                                        I enhance user experiences through intuitive designs, balancing aesthetics with usability and accessibility.
                                        </p>
                                    </div>
                                    <i className="flaticon-up-right-arrow" />
                                    <button
                                        data-mfp-src="#service-wrapper"
                                        className="service-link modal-popup"
                                    />
                                </div>
                                <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".8s">
                                    <div className="left-box d-flex flex-wrap align-items-center">
                                        <span className="number">04</span>
                                        <h3 className="service-title">Backened Design</h3>
                                    </div>
                                    <div className="right-box">
                                        <p>
                                        I craft scalable, secure solutions that connect billions by solving complex user experience challenges.
                                        </p>
                                    </div>
                                    <i className="flaticon-up-right-arrow" />
                                    <button
                                        data-mfp-src="#service-wrapper"
                                        className="service-link modal-popup"
                                    />
                                </div>
                                <div className="active-bg wow fadeInUp" data-wow-delay=".5s" ref={activeBgRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SERVICES SECTION END */}
            {/* start: Service Popup */}
            <div
                id="service-wrapper"
                className="popup_content_area zoom-anim-dialog mfp-hide"
                data-lenis-prevent=""
            >
                <div className="popup_modal_img">
                    <img src="images/modal-img_1.jpg" alt="" />
                </div>
                <div className="popup_modal_content">
                    <div className="service_details">
                        <div className="row">
                            <div className="col-lg-7 col-xl-8">
                                <div className="service_details_content">
                                    <div className="service_info">
                                        <h6 className="subtitle">SERVICES</h6>
                                        <h2 className="title">UI/UX Design</h2>
                                        <div className="desc">
                                            <p>
                                                Elizabeth some dodgy chavs are you taking the piss faff
                                                about pardon amongst car boot a load of old tosh is cracking
                                                goal blow off telling brown.
                                            </p>
                                            <p>
                                                Brolly show off show off pick your nose and blow off well A
                                                bit of how’s your father tomfoolery blimey, me old mucker
                                                starkers Queen’s English dropped a clanger bite your arm
                                                spiffing good time burke Why chancer. Hotpot bum bag
                                                cracking goal young delinquent naff bugger cup of chars
                                                bender loo it’s all gone to pot the nancy cheeky.
                                            </p>
                                            <p>
                                                At public school cras bog some dodgy chav Richard Why argy
                                                bargy vagabon William bender matie boy, off his nut chancer
                                                Jeffrey up the kyver say mufty you mug ummm telling pear
                                                shaped Oxford owt to do with me do one so said are you
                                                taking his.
                                            </p>
                                        </div>
                                        <h3 className="title">Services Process</h3>
                                        <div className="desc">
                                            <p>
                                                Elizabeth some dodgy chavs are you taking the piss faff
                                                about pardon amongst car boot a load of old tosh is cracking
                                                goal blow off telling brown.
                                            </p>
                                        </div>
                                        <ul>
                                            <li>Reinvent Your Business to Better</li>
                                            <li>Pioneering the Internet's First</li>
                                            <li>Pioneering the Design World's First</li>
                                            <li>Pioneering the Design World's First</li>
                                            <li>Pioneering the Design World's First</li>
                                            <li>Pioneering the Design World's First</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-4">
                                <div className="tj_main_sidebar">
                                    <div className="sidebar_widget services_list">
                                        <div className="widget_title">
                                            <h3 className="title">All Services</h3>
                                        </div>
                                        <ul>
                                            <li className="active">
                                                <button>
                                                    <i className="flaticon-design" />
                                                    Branding Design
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <i className="flaticon-3d-movie" />
                                                    3D Animation
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <i className="flaticon-ux-design" />
                                                    UI/UX Design
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <i className="flaticon-web-design" />
                                                    Web Design
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <i className="flaticon-ui-design" />
                                                    App Design
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar_widget contact_form">
                                        <div className="widget_title">
                                            <h3 className="title">Get in Touch</h3>
                                        </div>
                                        <form action="index.html">
                                            <div className="form_group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Name"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="form_group">
                                                <input
                                                    type="email"
                                                    name="semail"
                                                    id="semail"
                                                    placeholder="Email"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="form_group">
                                                <textarea
                                                    name="smessage"
                                                    id="smessage"
                                                    placeholder="Your message"
                                                    autoComplete="off"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="form_btn">
                                                <button className="btn tj-btn-primary" type="submit">
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end: Service Popup */}
        </>
    );
}

export default Services;
