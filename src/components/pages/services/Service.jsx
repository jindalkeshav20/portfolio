// import React from 'react';

// const Service = () => {
//     return (
//         <>
//             {/* start: Service Area */}
//             <section className="service-section" aria-labelledby="service-heading">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="section-header text-center">
//                                 <h2
//                                     id="service-heading"
//                                     className="section-title wow fadeInUp"
//                                     data-wow-delay=".3s"
//                                 >
//                                     Professional Services
//                                 </h2>
//                                 <p className="wow fadeInUp text-uppercase" data-wow-delay=".4s">
//                                     Tailored Solutions for Your Business Needs
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <article className="service-item service-item2 wow fadeInLeft" data-wow-delay=".3s">
//                                 <div className="service-icon">
//                                     <i className="flaticon-code" aria-hidden="true" />
//                                 </div>
//                                 <div className="service-content">
//                                     <h3 className="title">
//                                         <button
//                                             type="button"
//                                             aria-label="Learn more about Web Development"
//                                             data-mfp-src="#service-wrapper"
//                                             className="modal-popup"
//                                         >
//                                             Web Development
//                                         </button>
//                                     </h3>
//                                     <div className="desc">
//                                         <p>
//                                             Leveraging cutting-edge technologies, I create responsive and user-friendly websites tailored to your specific needs, ensuring optimal performance and user engagement.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </article>
//                         </div>
//                         <div className="col-lg-6">
//                             <article className="service-item service-item2 wow fadeInRight" data-wow-delay=".3s">
//                                 <div className="service-icon">
//                                     <i className="flaticon-bezier-tool" aria-hidden="true" />
//                                 </div>
//                                 <div className="service-content">
//                                     <h3 className="title">
//                                         <button
//                                             type="button"
//                                             aria-label="Learn more about Product Design"
//                                             data-mfp-src="#service-wrapper"
//                                             className="modal-popup"
//                                         >
//                                             Product Design
//                                         </button>
//                                     </h3>
//                                     <div className="desc">
//                                         <p>
//                                             I specialize in creating intuitive and attractive product designs that effectively communicate your brand’s message and meet user needs.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </article>
//                         </div>
//                         <div className="col-lg-6">
//                             <article className="service-item service-item2 wow fadeInLeft" data-wow-delay=".4s">
//                                 <div className="service-icon">
//                                     <i className="flaticon-browser" aria-hidden="true" />
//                                 </div>
//                                 <div className="service-content">
//                                     <h3 className="title">
//                                         <button
//                                             type="button"
//                                             aria-label="Learn more about UI/UX Design"
//                                             data-mfp-src="#service-wrapper"
//                                             className="modal-popup"
//                                         >
//                                             UI/UX Design
//                                         </button>
//                                     </h3>
//                                     <div className="desc">
//                                         <p>
//                                             With a focus on enhancing user experience, I design user interfaces that are both aesthetically pleasing and highly functional, ensuring a seamless user journey.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </article>
//                         </div>
//                         <div className="col-lg-6">
//                             <article className="service-item service-item2 wow fadeInRight" data-wow-delay=".4s">
//                                 <div className="service-icon">
//                                     <i className="flaticon-smartphone" aria-hidden="true" />
//                                 </div>
//                                 <div className="service-content">
//                                     <h3 className="title">
//                                         <button
//                                             type="button"
//                                             aria-label="Learn more about Motion Graphics"
//                                             data-mfp-src="#service-wrapper"
//                                             className="modal-popup"
//                                         >
//                                             Motion Graphics
//                                         </button>
//                                     </h3>
//                                     <div className="desc">
//                                         <p>
//                                             I create engaging motion graphics that help bring your ideas to life, capture audience attention, and effectively convey your brand’s message.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </article>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* end: Service Area */}

//             {/* start: Service Popup */}
//             <div
//                 id="service-wrapper"
//                 className="popup_content_area zoom-anim-dialog mfp-hide"
//                 aria-labelledby="service-popup-heading"
//             >
//                 <div className="popup_modal_img">
//                     <img src="images/modal-img.jpg" alt="Service Details" />
//                 </div>
//                 <div className="popup_modal_content">
//                     <div className="service_details">
//                         <div className="row">
//                             <div className="col-lg-7 col-xl-8">
//                                 <div className="service_details_content">
//                                     <div className="service_info">
//                                         <h4
//                                             id="service-popup-heading"
//                                             className="subtitle"
//                                         >
//                                             In-Depth Service Information
//                                         </h4>
//                                         <h2 className="title">UI/UX Design</h2>
//                                         <div className="desc">
//                                             <p>
//                                                 My UI/UX design services are centered around creating user interfaces that are not only visually appealing but also functional and user-friendly.
//                                             </p>
//                                             <p>
//                                                 By focusing on user research and iterative design processes, I ensure that the end product meets user needs and provides an exceptional experience.
//                                             </p>
//                                             <p>
//                                                 From wireframes to final designs, I work closely with you to refine concepts and deliver solutions that align with your goals and vision.
//                                             </p>
//                                         </div>
//                                         <h3 className="title">Design Process</h3>
//                                         <div className="desc">
//                                             <p>
//                                                 My design process includes thorough research, wireframing, prototyping, and user testing to ensure the final product is both effective and user-centric.
//                                             </p>
//                                         </div>
//                                         <ul>
//                                             <li>Initial Research and Planning</li>
//                                             <li>Wireframing and Prototyping</li>
//                                             <li>User Feedback and Iteration</li>
//                                             <li>Final Design Delivery</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-5 col-xl-4">
//                                 <aside className="tj_main_sidebar">
//                                     <div className="sidebar_widget services_list">
//                                         <div className="widget_title">
//                                             <h3 className="title">Explore All Services</h3>
//                                         </div>
//                                         <ul>
//                                             <li className="active">
//                                                 <button>
//                                                     <i className="flaticon-design" aria-hidden="true" />
//                                                     Branding Design
//                                                 </button>
//                                             </li>
//                                             <li>
//                                                 <button>
//                                                     <i className="flaticon-3d-movie" aria-hidden="true" />
//                                                     3D Animation
//                                                 </button>
//                                             </li>
//                                             <li>
//                                                 <button>
//                                                     <i className="flaticon-ux-design" aria-hidden="true" />
//                                                     UI/UX Design
//                                                 </button>
//                                             </li>
//                                             <li>
//                                                 <button>
//                                                     <i className="flaticon-web-design" aria-hidden="true" />
//                                                     Web Development
//                                                 </button>
//                                             </li>
//                                             <li>
//                                                 <button>
//                                                     <i className="flaticon-ui-design" aria-hidden="true" />
//                                                     App Design
//                                                 </button>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="sidebar_widget contact_form">
//                                         <div className="widget_title">
//                                             <h3 className="title">Get in Touch</h3>
//                                         </div>
//                                         <form action="index.html" method="post">
//                                             <div className="form_group">
//                                                 <label htmlFor="name" className="visually-hidden">Name</label>
//                                                 <input
//                                                     type="text"
//                                                     name="name"
//                                                     id="name"
//                                                     placeholder="Your Name"
//                                                     autoComplete="off"
//                                                     required
//                                                 />
//                                             </div>
//                                             <div className="form_group">
//                                                 <label htmlFor="semail" className="visually-hidden">Email</label>
//                                                 <input
//                                                     type="email"
//                                                     name="semail"
//                                                     id="semail"
//                                                     placeholder="Your Email"
//                                                     autoComplete="off"
//                                                     required
//                                                 />
//                                             </div>
//                                             <div className="form_group">
//                                                 <label htmlFor="smessage" className="visually-hidden">Message</label>
//                                                 <textarea
//                                                     name="smessage"
//                                                     id="smessage"
//                                                     placeholder="Your Message"
//                                                     autoComplete="off"
//                                                     required
//                                                 />
//                                             </div>
//                                             <div className="form_btn">
//                                                 <button className="btn tj-btn-primary" type="submit">
//                                                     Send Message
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </aside>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* end: Service Popup */}
//         </>
//     );
// }

// export default Service;
import React from 'react';

const Service = () => {
    return (
        <>
            {/* start: Service Area */}
            <section className="service-section" aria-labelledby="service-heading">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center">
                                <h2
                                    id="service-heading"
                                    className="section-title wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    Professional Services by Keshav Jindal
                                </h2>
                                <p className="wow fadeInUp text-uppercase" data-wow-delay=".4s">
                                    Tailored Solutions for Your Business Needs by a Full Stack Web Developer, Web Developer, and Backend Expert
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <article className="service-item service-item2 wow fadeInLeft" data-wow-delay=".3s">
                                <div className="service-icon">
                                    <i className="flaticon-code" aria-hidden="true" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">
                                        <button
                                            type="button"
                                            aria-label="Learn more about Web Development"
                                            data-mfp-src="#service-wrapper"
                                            className="modal-popup"
                                        >
                                            Web Development
                                        </button>
                                    </h3>
                                    <div className="desc">
                                        <p>
                                            As a Full Stack Web Developer, I leverage cutting-edge technologies to create responsive and user-friendly websites tailored to your needs, ensuring optimal performance and user engagement.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-6">
                            <article className="service-item service-item2 wow fadeInRight" data-wow-delay=".3s">
                                <div className="service-icon">
                                    <i className="flaticon-bezier-tool" aria-hidden="true" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">
                                        <button
                                            type="button"
                                            aria-label="Learn more about Product Design"
                                            data-mfp-src="#service-wrapper"
                                            className="modal-popup"
                                        >
                                            Product Design
                                        </button>
                                    </h3>
                                    <div className="desc">
                                        <p>
                                            I specialize in creating intuitive and attractive product designs that effectively communicate your brand’s message and meet user needs, combining creativity with technical precision.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-6">
                            <article className="service-item service-item2 wow fadeInLeft" data-wow-delay=".4s">
                                <div className="service-icon">
                                    <i className="flaticon-browser" aria-hidden="true" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">
                                        <button
                                            type="button"
                                            aria-label="Learn more about UI/UX Design"
                                            data-mfp-src="#service-wrapper"
                                            className="modal-popup"
                                        >
                                            UI/UX Design
                                        </button>
                                    </h3>
                                    <div className="desc">
                                        <p>
                                            As a Backend Developer, I focus on designing user interfaces that are not only visually appealing but also functional, ensuring a seamless user experience with a focus on simplicity and usability.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-6">
                            <article className="service-item service-item2 wow fadeInRight" data-wow-delay=".4s">
                                <div className="service-icon">
                                    <i className="flaticon-smartphone" aria-hidden="true" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title">
                                        <button
                                            type="button"
                                            aria-label="Learn more about Motion Graphics"
                                            data-mfp-src="#service-wrapper"
                                            className="modal-popup"
                                        >
                                            Motion Graphics
                                        </button>
                                    </h3>
                                    <div className="desc">
                                        <p>
                                            I create engaging motion graphics that help bring your ideas to life, capture audience attention, and effectively convey your brand’s message through creative and impactful animations.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/* end: Service Area */}

            {/* start: Service Popup */}
            <div
                id="service-wrapper"
                className="popup_content_area zoom-anim-dialog mfp-hide"
                aria-labelledby="service-popup-heading"
            >
                <div className="popup_modal_img">
                    <img src="images/modal-img.jpg" alt="Service Details" />
                </div>
                <div className="popup_modal_content">
                    <div className="service_details">
                        <div className="row">
                            <div className="col-lg-7 col-xl-8">
                                <div className="service_details_content">
                                    <div className="service_info">
                                        <h4
                                            id="service-popup-heading"
                                            className="subtitle"
                                        >
                                            In-Depth Service Information
                                        </h4>
                                        <h2 className="title">UI/UX Design</h2>
                                        <div className="desc">
                                            <p>
                                                My UI/UX design services focus on creating interfaces that are visually appealing, highly functional, and user-friendly, with a seamless experience for your users.
                                            </p>
                                            <p>
                                                I use user-centric design processes, ensuring every step of the journey is aimed at delivering intuitive, well-crafted products that align with your business objectives.
                                            </p>
                                        </div>
                                        <h3 className="title">Design Process</h3>
                                        <div className="desc">
                                            <p>
                                                My design process includes research, prototyping, user testing, and iteration, focusing on delivering the most effective solutions.
                                            </p>
                                        </div>
                                        <ul>
                                            <li>Initial Research and Planning</li>
                                            <li>Wireframing and Prototyping</li>
                                            <li>User Feedback and Iteration</li>
                                            <li>Final Design Delivery</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-4">
                                <aside className="tj_main_sidebar">
                                    <div className="sidebar_widget services_list">
                                        <div className="widget_title">
                                            <h3 className="title">Explore All Services</h3>
                                        </div>
                                        <ul>
                                            <li className="active">
                                                <button>
                                                    <i className="flaticon-design" aria-hidden="true" />
                                                    Branding Design
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <i className="flaticon-3d-movie" aria-hidden="true" />
                                                    3D Animation
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <i className="flaticon-ux-design" aria-hidden="true" />
                                                    UI/UX Design
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <i className="flaticon-web-design" aria-hidden="true" />
                                                    Web Development
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <i className="flaticon-ui-design" aria-hidden="true" />
                                                    App Design
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar_widget contact_form">
                                        <div className="widget_title">
                                            <h3 className="title">Get in Touch</h3>
                                        </div>
                                        <form action="index.html" method="post">
                                            <div className="form_group">
                                                <label htmlFor="name" className="visually-hidden">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    autoComplete="off"
                                                    required
                                                />
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="semail" className="visually-hidden">Email</label>
                                                <input
                                                    type="email"
                                                    name="semail"
                                                    id="semail"
                                                    placeholder="Your Email"
                                                    autoComplete="off"
                                                    required
                                                />
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="smessage" className="visually-hidden">Message</label>
                                                <textarea
                                                    name="smessage"
                                                    id="smessage"
                                                    placeholder="Your Message"
                                                    autoComplete="off"
                                                    required
                                                />
                                            </div>
                                            <div className="form_btn">
                                                <button className="btn tj-btn-primary" type="submit">
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end: Service Popup */}
        </>
    );
}

export default Service;
