

import React, { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import '../css/Counter.css'


export const Counter = ({ className, ...rest }) => {
    const [viewPartEntered, setViewPartEntered] = useState(false)


    return (
        <div id="counter">
            <div className="container">
                <div className='row-counter'>
                    {/* <div className="about-text">
                        <h2>Our Awards</h2>
                        <p>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' </p>

                    </div> */}
                    <div className='column-counter'>
                        <strong data-number='305'>
                            <CountUp {...rest} start={viewPartEntered ? null : 0} end={305}>
                                {({ countUpRef }) => {
                                    return (
                                        <VisibilitySensor
                                            active={!viewPartEntered}
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setViewPartEntered(true)
                                                }
                                            }}
                                            delayedCall
                                        >
                                            <span className='number' ref={countUpRef} ></span>

                                        </VisibilitySensor>
                                    )
                                }}

                            </CountUp>

                        </strong>
                        <span>On Going <br /> Projects </span>

                    </div>

                    <div className='column-counter'>
                        <strong data-number='1050'>
                            <CountUp {...rest} start={viewPartEntered ? null : 0} end={1050}>
                                {({ countUpRef }) => {
                                    return (
                                        <VisibilitySensor
                                            active={!viewPartEntered}
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setViewPartEntered(true)
                                                }
                                            }}
                                            delayedCall
                                        >
                                            <span className='number' ref={countUpRef} ></span>

                                        </VisibilitySensor>
                                    )
                                }}

                            </CountUp>

                        </strong>
                        <span>Total<br /> Projects </span>

                    </div>

                    <div className='column-counter'>
                        <strong data-number='206'>
                            <CountUp {...rest} start={viewPartEntered ? null : 0} end={206}>
                                {({ countUpRef }) => {
                                    return (
                                        <VisibilitySensor
                                            active={!viewPartEntered}
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setViewPartEntered(true)
                                                }
                                            }}
                                            delayedCall
                                        >
                                            <span className='number' ref={countUpRef} ></span>

                                        </VisibilitySensor>
                                    )
                                }}

                            </CountUp>

                        </strong>
                        <span>Job <br /> Success </span>

                    </div>
                    <div className='column-counter'>
                        <strong data-number='27'>
                            <CountUp {...rest} start={viewPartEntered ? null : 0} end={27}>
                                {({ countUpRef }) => {
                                    return (
                                        <VisibilitySensor
                                            active={!viewPartEntered}
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setViewPartEntered(true)
                                                }
                                            }}
                                            delayedCall
                                        >
                                            <span className='number' ref={countUpRef} ></span>

                                        </VisibilitySensor>
                                    )
                                }}

                            </CountUp>

                        </strong>
                        <span>Total <br /> Branches </span>

                    </div>
                </div>
            </div>
        </div>
    )
}