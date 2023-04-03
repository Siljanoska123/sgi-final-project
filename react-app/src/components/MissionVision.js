// https://www.youtube.com/watch?v=yRK_U1ffXKA
import React, { useEffect } from 'react'
import '../css/Mission.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

// https://www.youtube.com/watch?v=5Ntw3pFlBGs 29min
export const MissionVision = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000, once: true, easing: 'ease' })

    })

    return (
        <div id='mission' className='text-center'>
            <div className='container'>
                <div className='section-title'>

                    <h2>Mission and Vision</h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className='column' data-aos={d.aos}>
                                {' '}
                                <i className={d.icon}></i>

                                <div className='mission-desc'>
                                    <h3>{d.title}</h3>
                                    <p className="mission-vision-text">{d.text}</p>
                                </div>

                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}