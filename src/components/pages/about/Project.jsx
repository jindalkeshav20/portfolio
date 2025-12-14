import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <>
            {/* start: Text Area */}
            <section className="text-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header">
                                <div className="heading-left">
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        Want to start a project?
                                    </p>
                                    <h5
                                        id="anim"
                                        className="section-title wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Let’s have a chat
                                    </h5>
                                </div>
                                <div className="chat-mail wow fadeInRight" data-wow-delay=".5s">
                                    <Link className="link" to="mailto:jindalkeshav20@gmail.com" aria-label="Email Keshav Jindal">
                                        jindalkeshav20@gmail.com <i className="fa-light fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end: Text Area */}
        </>

    )
}

export default Project