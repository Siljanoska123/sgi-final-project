
import React, { useEffect } from 'react'
import aboutus from '../images/about.jpg'
import '../css/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


// https://www.youtube.com/watch?v=5Ntw3pFlBGs 29min
export const About = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000, once: true, easing: 'ease' })

    })

    return (
        <div id="about">

            <div className="container">
                <div className="row">
                    <div data-aos='fade-right'
                    
                        className="column">
                        {" "}
                        <img src={aboutus} className="img-responsive" alt="" />{" "}
                    </div>
                    <div data-aos='fade-left' className="column">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>{props.data ? props.data.paragraph : "loading..."}</p>

                        </div>


                    </div>
                </div>
                <div className="row">
                    <div className="about-text" data-aos='fade-up' >
                        <h3>Why Choose Us?</h3>
                        <div className="list-style">
                            <div className="column">
                                <ul>
                                    {props.data
                                        ? props.data.Why.map((d, i) => (
                                            <li key={`${d}-${i}`}>{d}</li>
                                        ))
                                        : "loading"}
                                </ul>
                            </div>
                            <div className="column">
                                <ul>
                                    {props.data
                                        ? props.data.Why2.map((d, i) => (
                                            <li key={`${d}-${i}`}> {d}</li>
                                        ))
                                        : "loading"}
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}