import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Testimonial = () => {
    const options = {
        autoplay: true,
        autoplayHoverPause: false,
        active: true,
        smartSpeed: 1000,
        autoplayTimeout: 7000,
        dots: true,
        nav: false,
        loop: true,
        margin: 30,
        responsive: {
            0: { items: 1 },

            600: { items: 2 },

            1000: { items: 2 },
        },
    };

    const testimonials = [
        {
            logo: "images/1.png",
            image: "images/1_2.jpg",
            quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
            name: "Brandon Fraser",
            designation: "Senior Software Dev, Cosmic Sport"
        },
        {
            logo: "images/2.png",
            image: "images/2_2.jpg",
            quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
            name: "Tim Bailey",
            designation: "SEO Specialist, Theme Junction"
        },
        {
            logo: "images/1.png",
            image: "images/1_2.jpg",
            quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
            name: "Brandon Fraser",
            designation: "Senior Software Dev, Cosmic Sport"
        },
        {
            logo: "images/2.png",
            image: "images/2_2.jpg",
            quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
            name: "Tim Bailey",
            designation: "SEO Specialist, Theme Junction"
        },
        {
            logo: "images/1.png",
            image: "images/1_2.jpg",
            quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
            name: "Brandon Fraser",
            designation: "Senior Software Dev, Cosmic Sport"
        },
        {
            logo: "images/2.png",
            image: "images/2_2.jpg",
            quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
            name: "Tim Bailey",
            designation: "SEO Specialist, Theme Junction"
        }
    ];

    return (
        <>
            {/* TESTIMONIAL SECTION START */}
            <section className="testimonial-section" id="testimonials-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-header">
                                <h2 className="section-title wow fadeInLeft" data-wow-delay=".3s">
                                    My Client's Stories
                                </h2>
                                <p className="wow fadeInLeft" data-wow-delay=".4s">
                                    Empowering people in new a digital journey with my super services
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-6 offset-xl-1">
                            <div
                                className="testimonials-widget wow fadeInRight"
                                data-wow-delay=".5s"
                            >

                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper testimonial-carousel testimonials-widget"
                                >


                                    {testimonials.map((item, index) => (<SwiperSlide ><div className="testimonial-item">
                                        <div className="top-area d-flex flex-wrap justify-content-between">
                                            <div className="logo-box">
                                                <img src={item.logo} alt="" />
                                            </div>
                                            <div className="image-box">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="icon-box">
                                            <svg
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint0_linear_263_588)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_263_588"
                                                        x1="-0.0363755"
                                                        y1="-0.0729998"
                                                        x2="35.3333"
                                                        y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop offset={1} stopColor="var(--tj-theme-primary)" />
                                                        <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <svg
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                                                    fill="url(#paint1_linear_263_589)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint1_linear_263_589"
                                                        x1="-0.0363755"
                                                        y1="-0.0729998"
                                                        x2="35.3333"
                                                        y2="-0.0729991"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop offset={1} stopColor="var(--tj-theme-primary)" />
                                                        <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>

                                        <p className="quote">
                                            “{item.quote}”
                                        </p>
                                        <h4 className="name">{item.name}</h4>
                                        <span className="designation">{item.designation}</span>
                                    </div></SwiperSlide>))}

                                </Swiper>




                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* TESTIMONIAL SECTION END */}
        </>

    )
}

export default Testimonial