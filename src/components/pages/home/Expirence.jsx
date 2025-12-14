import React from 'react';

const Expirence = ({ ExpireneData, EducationData }) => {
    return (
        <>
            {/* RESUME SECTION START */}
            <section className="resume-section" id="resume-section">
                <div className="container">
                    <div className="row">
                        {/* Experience Section */}
                        <div className="col-md-6">
                            <div className="section-header wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section-title">
                                    <i className="flaticon-recommendation" aria-hidden="true" /> My Experience
                                </h2>
                            </div>
                            <div className="resume-widget">
                                {ExpireneData.map((expirence, index) => (
                                    <article className="resume-item wow fadeInLeft" data-wow-delay=".4s" key={index}>
                                        <div className="time" aria-label={`Year of experience: ${expirence.year}`}>{expirence.year}</div>
                                        <h3 className="resume-title">{expirence.post}</h3>
                                        <p className="institute" aria-label={`Location: ${expirence.location}`}>{expirence.location}</p>                                        
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="col-md-6">
                            <div className="section-header wow fadeInUp" data-wow-delay=".4s">
                                <h2 className="section-title">
                                    <i className="flaticon-graduation-cap" aria-hidden="true" /> My Education
                                </h2>
                            </div>
                            <div className="resume-widget">
                                {EducationData.map((education, index) => (
                                    <article className="resume-item wow fadeInLeft" data-wow-delay=".5s" key={index}>
                                        <div className="time" aria-label={`Year of education: ${education.year}`}>{education.year}</div>
                                        <h3 className="resume-title">{education.post}</h3>
                                        <p className="institute" aria-label={`Institution: ${education.location}`}>{education.location}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* RESUME SECTION END */}
        </>
    );
};

export default Expirence;
