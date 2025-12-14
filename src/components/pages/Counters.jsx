import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const Counters = () => {
    const [counts, setCounts] = useState({
        yearsOfExperience: 0,
        projectsCompleted: 0,
        happyClients: 0,
    });

    useEffect(() => {
        // Simulate data load
        setTimeout(() => {
            setCounts({
                yearsOfExperience: 2,
                projectsCompleted: 45,
                happyClients: 10,
                efforts: 90,
            });
        }, 2000); // Adjust the delay as needed
    }, []);

    return (
        <>
            <section className="funfact-area" aria-labelledby="counters-heading">
                <h2 id="counters-heading" className="visually-hidden">Key Metrics</h2>
                <div className="row">
                    <div className="col-6 col-lg-3">
                        <div 
                            className="funfact-item d-flex flex-column justify-content-center flex-sm-row flex-wrap align-items-center"
                            aria-label="Years of Experience"
                        >
                            <div className="number" aria-live="polite">
                                <Odometer value={counts.yearsOfExperience} format="d" />
                            </div>
                            <div className="text">
                                Years of <br />
                                Experience
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div 
                            className="funfact-item d-flex flex-column justify-content-center flex-sm-row flex-wrap align-items-center"
                            aria-label="Projects Completed"
                        >
                            <div className="number" aria-live="polite">
                                <Odometer value={counts.projectsCompleted} format="d" />
                                +
                            </div>
                            <div className="text">
                                Project <br />
                                Completed
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div 
                            className="funfact-item d-flex flex-column justify-content-center flex-sm-row flex-wrap align-items-center"
                            aria-label="Happy Clients"
                        >
                            <div className="number" aria-live="polite">
                                {/* <Odometer value={counts.happyClients * 10} format="(.ddd),dd" /> */}
                                <Odometer value={counts.happyClients} format="d" />
                                +
                            </div>
                            <div className="text">
                                Happy <br />
                                Clients
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div 
                            className="funfact-item d-flex flex-column justify-content-center flex-sm-row flex-wrap align-items-center"
                            aria-label="Years of Experience"
                        >
                            <div className="number" aria-live="polite">
                                <Odometer value={counts.efforts} format="d" /> %
                            </div>
                            <div className="text">
                                My <br />
                                Efforts
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counters;
