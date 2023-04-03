import React from 'react'
import { useState } from 'react'

import '../css/Footer.css'




export const Footer = (props) => {


    return (
        <div>
            <div id='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='footer-column'>
                            <div className='column-content'>
                                <h2>SGI</h2>
                                <p>
                                    "Excellence Award for Your Online Business Reputation"
                                </p>
                                <ul className='footer-link'>
                                    <li>
                                        <a target="blank" href={props.data ? props.data.linkedin : '/'}>
                                            <i className='fa fa-linkedin-square' ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="blank" href={props.data ? props.data.mail : '/'}>
                                            <i className='fa fa-envelope-o'></i>
                                        </a>
                                    </li>
                                </ul>


                            </div>

                        </div>

                        <div className='footer-column'>
                            <div className='column-content'>
                                <h2>Services</h2>

                                <ul >
                                    <li>
                                        <a>
                                        <i className="fa-solid fa-check"></i>
                                            Online Reputation
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                        <i className="fa-solid fa-check"></i>
                                            Customer Excellence
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                        <i className="fa-solid fa-check"></i>
                                            Digital Community Engangement
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                        <i className="fa-solid fa-check"></i>
                                            Happiness at Work
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                        <i className="fa-solid fa-check"></i>
                                            Corporate Social Responsibility
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className='footer-column'>
                            <div className='column-content'>
                                <h2>Companny</h2>

                                <ul >
                                    <li>
                                        <a href='/#about'>
                                            {/* <i className='fa-solid fa-arrow-right-long' ></i> */}
                                            About us
                                        </a>

                                    </li>
                                    <li>
                                        <a href='/#mission'>
                                            {/* <i className='fa-solid fa-arrow-right-long' ></i> */}
                                            Mission and Vision
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/awards' >
                                            {/* <i className='fa-solid fa-arrow-right-long' ></i> */}
                                            Awards
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#contact'>
                                            {/* <i className='fa-solid fa-arrow-right-long' ></i> */}
                                            Contact us
                                        </a>

                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className='footer-column'>
                            <div className='column-content'>
                                <h2>Have a Questions?</h2>

                                <ul >
                                    <li className='con-list'>
                                        <span className='footer-icon'>
                                            <i className='fa-solid fa-location-dot' ></i>
                                        </span>
                                        <span className='txt'>
                                            Germany
                                        </span>
                                    </li>
                                    <li className='con-list'>
                                        <span className='footer-icon'>
                                            <i className='fa-solid fa-phone' ></i>
                                        </span>
                                        <span className='txt'>
                                            +41 1781111
                                        </span>
                                    </li>
                                    <li className='con-list'>
                                        <span className='footer-icon'>
                                            <i className='fa-solid fa-envelope' ></i>
                                        </span>
                                        <span className='txt'>
                                            info@sgi.com
                                        </span>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                

            </div>

        </div>
    )
}
