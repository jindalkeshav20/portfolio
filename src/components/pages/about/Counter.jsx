import React from 'react';
import Counters from '../Counters';
const Counter = () => {
    return (
        <>
            {/* start: Counter Area */}
            <section className="counter-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Counters/>
                        </div>
                    </div>
                </div>
            </section>
            {/* end: Counter Area */}
        </>

    )
}

export default Counter