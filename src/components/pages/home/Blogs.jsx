import React from 'react'

const Blogs = () => {
  return (
    <>
      {/* BLOG SECTION STAR */}
      <section className="blog-section" id="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  Recent Blogs
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  We put your ideas and thus your wishes in the form of a unique web
                  project that inspires you and you customers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".5s">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src="images/1_1.jpg" alt="" />
                  </a>
                  <a href="#" className="category">
                    Tutorial
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        <i className="fa-light fa-calendar-days" /> Oct 01, 2022
                      </li>
                      <li>
                        <i className="fa-light fa-comments" />{" "}
                        <a href="#">Comment (0)</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">top 10 ui ux designers</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".6s">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src="images/2_1.jpg" alt="" />
                  </a>
                  <a href="#" className="category">
                    TIPS
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        <i className="fa-light fa-calendar-days" /> Nov 01, 2022
                      </li>
                      <li>
                        <i className="fa-light fa-comments" />{" "}
                        <a href="#">Comment (0)</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">App Development Guides</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".7s">
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src="images/3_1.jpg" alt="" />
                  </a>
                  <a href="#" className="category">
                    FREEBIES
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        <i className="fa-light fa-calendar-days" /> Dec 01, 2022
                      </li>
                      <li>
                        <i className="fa-light fa-comments" />{" "}
                        <a href="#">Comment (0)</a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">learn graphic design free</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG SECTION END */}
    </>

  )
}

export default Blogs