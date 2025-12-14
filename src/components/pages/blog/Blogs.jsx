import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <>
            {/* START: Blog Section */}
            <section className="full-width tj-posts__area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tj-post__container">
                                <article className="tj-post wow fadeInUp" data-wow-delay=".3s">
                                    <div className="tj-post__thumb">
                                        <Link to="/blog-detail">
                                            <img src="/images/blog-4.jpg" alt="" />
                                        </Link>
                                        <Link to="#" className="category">
                                            Tutorial
                                        </Link>
                                    </div>
                                    <div className="tj-post__content">
                                        <div className="tj-post__meta entry-meta">
                                            <span>
                                                <i className="fa-light fa-user" /> <Link to="#">By Admin</Link>
                                            </span>
                                            <span>
                                                <i className="fa-light fa-calendar-days" /> 11 Jul, 2023
                                            </span>
                                            <span>
                                                <i className="fa-light fa-comments" />
                                                <Link to="#">Comments (3)</Link>
                                            </span>
                                        </div>
                                        <h3 className="tj-post__title entry-title">
                                            <Link to="/blog-detail">
                                                The Role of Technology in Modern Logistics Management
                                            </Link>
                                        </h3>
                                        <div className="tj-post__excerpt">
                                            <p>
                                                Lorem ipsum is simply free text used by copytyping
                                                refreshing. Neque porro est qui dolorem ipsum quia quaed
                                                inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Aelltes port lacus quis enim var sed
                                                efficitur turpis gilla sed sit...
                                            </p>
                                        </div>
                                        <div className="tj-post__btn">
                                            <Link to="/blog-detail" className="tj-btn-primary">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <blockquote
                                    className="wp-block-quote wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <p>
                                        “Welcome to our blog, where we celebrate our achievement as an
                                        AWS SaaS Competency Partner and share insights on how we
                                        accomplished this significant milestone. As businesses unlock
                                        growth opportunities in the digital age, harnessing the power of
                                        cloud computing has become essential. Amazon Web Services (AWS)
                                        offers the AWS SaaS Competency.”
                                    </p>
                                    <p>
                                        <cite>Silvester Scott</cite>
                                    </p>
                                </blockquote>
                                <article className="tj-post wow fadeInUp" data-wow-delay=".3s">
                                    <div className="tj-post__thumb">
                                        <img src="images/blog-3.jpg" alt="" />
                                        <div className="tj-post__video">
                                            <Link
                                                href="https://player.vimeo.com/video/364758150"
                                                className="popup_video"
                                            >
                                                <i className="fa-thin fa-circle-play" />
                                            </Link>
                                        </div>
                                        <Link to="#" className="category">
                                            TIPS
                                        </Link>
                                    </div>
                                    <div className="tj-post__content">
                                        <div className="tj-post__meta entry-meta">
                                            <span>
                                                <i className="fa-light fa-user" /> <Link to="#">By Admin</Link>
                                            </span>
                                            <span>
                                                <i className="fa-light fa-calendar-days" /> 11 Jul, 2023
                                            </span>
                                            <span>
                                                <i className="fa-light fa-comments" />
                                                <Link to="#">Comments (3)</Link>
                                            </span>
                                        </div>
                                        <h3 className="tj-post__title entry-title">
                                            <Link to="/blog-detail">
                                                The Role of Technology in Modern Logistics Management
                                            </Link>
                                        </h3>
                                        <div className="tj-post__excerpt">
                                            <p>
                                                Lorem ipsum is simply free text used by copytyping
                                                refreshing. Neque porro est qui dolorem ipsum quia quaed
                                                inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Aelltes port lacus quis enim var sed
                                                efficitur turpis gilla sed sit...
                                            </p>
                                        </div>
                                        <div className="tj-post__btn">
                                            <Link to="/blog-detail" className="tj-btn-primary">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <article className="tj-post wow fadeInUp" data-wow-delay=".3s">
                                    <div className="tj-post__thumb">
                                        <div className="tj-post__gallery owl-carousel">
                                            <div className="tj-post-gallery__img">
                                                <img src="images/blog-2.jpg" alt="" />
                                            </div>
                                            <div className="tj-post-gallery__img">
                                                <img src="images/blog-3.jpg" alt="" />
                                            </div>
                                            <div className="tj-post-gallery__img">
                                                <img src="images/blog-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <Link to="#" className="category">
                                            FREEBIES
                                        </Link>
                                    </div>
                                    <div className="tj-post__content">
                                        <div className="tj-post__meta entry-meta">
                                            <span>
                                                <i className="fa-light fa-user" /> <Link to="#">By Admin</Link>
                                            </span>
                                            <span>
                                                <i className="fa-light fa-calendar-days" /> 11 Jul, 2023
                                            </span>
                                            <span>
                                                <i className="fa-light fa-comments" />
                                                <Link to="#">Comments (3)</Link>
                                            </span>
                                        </div>
                                        <h3 className="tj-post__title entry-title">
                                            <Link to="/blog-detail">
                                                The Role of Technology in Modern Logistics Management
                                            </Link>
                                        </h3>
                                        <div className="tj-post__excerpt">
                                            <p>
                                                Lorem ipsum is simply free text used by copytyping
                                                refreshing. Neque porro est qui dolorem ipsum quia quaed
                                                inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Aelltes port lacus quis enim var sed
                                                efficitur turpis gilla sed sit...
                                            </p>
                                        </div>
                                        <div className="tj-post__btn">
                                            <Link to="/blog-detail" className="tj-btn-primary">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <article className="tj-post wow fadeInUp" data-wow-delay=".3s">
                                    <div className="tj-post__thumb">
                                        <Link to="/blog-detail">
                                            <img src="images/blog-1.jpg" alt="" />
                                        </Link>
                                        <Link to="#" className="category">
                                            Tutorial
                                        </Link>
                                    </div>
                                    <div className="tj-post__content">
                                        <div className="tj-post__meta entry-meta">
                                            <span>
                                                <i className="fa-light fa-user" /> <Link to="#">By Admin</Link>
                                            </span>
                                            <span>
                                                <i className="fa-light fa-calendar-days" /> 11 Jul, 2023
                                            </span>
                                            <span>
                                                <i className="fa-light fa-comments" />
                                                <Link to="#">Comments (3)</Link>
                                            </span>
                                        </div>
                                        <h3 className="tj-post__title entry-title">
                                            <Link to="/blog-detail">
                                                The Role of Technology in Modern Logistics Management
                                            </Link>
                                        </h3>
                                        <div className="tj-post__excerpt">
                                            <p>
                                                Lorem ipsum is simply free text used by copytyping
                                                refreshing. Neque porro est qui dolorem ipsum quia quaed
                                                inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Aelltes port lacus quis enim var sed
                                                efficitur turpis gilla sed sit...
                                            </p>
                                        </div>
                                        <div className="tj-post__btn">
                                            <Link to="/blog-detail" className="tj-btn-primary">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                                <div className="tj__pagination wow fadeInUp" data-wow-delay=".3s">
                                    <ul>
                                        <li>
                                            <Link className="page-numbers" to="#">
                                                <i className="fal fa-arrow-left" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="page-numbers" to="#">
                                                1
                                            </Link>
                                        </li>
                                        <li>
                                            <span className="page-numbers current">2</span>
                                        </li>
                                        <li>
                                            <Link className="page-numbers" to="#">
                                                3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="page-numbers" to="#">
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tj_main_sidebar">
                                <div
                                    className="sidebar_widget widget_search wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="tj-widget__search form_group">
                                        <form className="search-form" action="#" method="get">
                                            <input
                                                type="search"
                                                id="search"
                                                name="search"
                                                placeholder="Search..."
                                            />
                                            <button className="search-btn" type="submit">
                                                <i className="fa-light fa-magnifying-glass" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="sidebar_widget widget_categories wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="widget_title">
                                        <h3 className="title">Categories</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="#">Business</Link> (4)
                                        </li>
                                        <li>
                                            <Link to="#">Analysis</Link> (0)
                                        </li>
                                        <li>
                                            <Link to="#">Technology</Link> (1)
                                        </li>
                                        <li>
                                            <Link to="#">Technology</Link> (10)
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="sidebar_widget tj_recent_posts wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="widget_title">
                                        <h3 className="title">Recent post</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="recent-post_thumb">
                                                <Link to="/blog-detail">
                                                    <img src="images/post-thumb-1.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="recent-post_content">
                                                <div className="tj-post__meta entry-meta">
                                                    <span>
                                                        <i className="fa-light fa-calendar-days" />
                                                        Jan 2024
                                                    </span>
                                                    <span>
                                                        <i className="fa-light fa-comments" />
                                                        <Link to="#"> (3)</Link>
                                                    </span>
                                                </div>
                                                <h4 className="recent-post_title">
                                                    <Link to="/blog-detail">
                                                        Definition and Principles of JIT Logistics
                                                    </Link>
                                                </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recent-post_thumb">
                                                <Link to="/blog-detail">
                                                    <img src="images/post-thumb-2.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="recent-post_content">
                                                <div className="tj-post__meta entry-meta">
                                                    <span>
                                                        <i className="fa-light fa-calendar-days" />
                                                        Jan 2024
                                                    </span>
                                                    <span>
                                                        <i className="fa-light fa-comments" />
                                                        <Link to="#"> (3)</Link>
                                                    </span>
                                                </div>
                                                <h4 className="recent-post_title">
                                                    <Link to="/blog-detail">
                                                        Real-world Examples of Successful JIT Logistics
                                                    </Link>
                                                </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recent-post_thumb">
                                                <Link to="/blog-detail">
                                                    <img src="images/post-thumb-3.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="recent-post_content">
                                                <div className="tj-post__meta entry-meta">
                                                    <span>
                                                        <i className="fa-light fa-calendar-days" />
                                                        Jan 2024
                                                    </span>
                                                    <span>
                                                        <i className="fa-light fa-comments" />
                                                        <Link to="#"> (3)</Link>
                                                    </span>
                                                </div>
                                                <h4 className="recent-post_title">
                                                    <Link to="/blog-detail">
                                                        Real-world Examples of Successful JIT Logistics
                                                    </Link>
                                                </h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="sidebar_widget widget_tag_cloud wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="widget_title">
                                        <h3 className="title">Popular tag</h3>
                                    </div>
                                    <div className="tagcloud">
                                        <Link to="#">Business</Link>
                                        <Link to="#">Analysis</Link>
                                        <Link to="#">Technology</Link>
                                        <Link to="#">Finance</Link>
                                        <Link to="#">Design</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END: Blog Section */}
        </>

    )
}

export default Blogs