import React from 'react'

const Resume = ({ ExpireneData, EducationData }) => {
    return (
        <>
            {/* start: Works Area */}
            <section className="works-section style-2" id="resume-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center">
                                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                                    My Resume
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="works-wrapper">
                                <div className="works-content-item">
                                    <h3 className="title wow fadeInLeft" data-wow-delay=".3s">
                                        Education
                                    </h3>
                                    <div className="works-inner wow fadeInUp" data-wow-delay=".4s">
                                        {ExpireneData.map((expirence, index) =>
                                            <div className="works-item">
                                                <div className="works-icon">
                                                    <i className="flaticon-graduation-cap" />
                                                </div>
                                                <div className="works-content">
                                                    <span className="number">{expirence.year}</span>
                                                    <h5 className="title">{expirence.post}</h5>
                                                    <span className="sub-title">{expirence.location}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="works-content-item">
                                    <h3 className="title wow fadeInRight" data-wow-delay=".3s">
                                        Work Experience
                                    </h3>
                                    <div className="works-inner wow fadeInUp" data-wow-delay=".4s">
                                        {EducationData.map((education, index) =>
                                            <div className="works-item">
                                                <div className="works-icon">
                                                    <i className="flaticon-suitcase" />
                                                </div>
                                                <div className="works-content">
                                                <span className="number">{education.year}</span>
                                                    <h5 className="title">{education.post}</h5>
                                                    <span className="sub-title">{education.location}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end: Works Area */}
        </>


    )
}

export default Resume