
import React, { useEffect } from 'react'
import '../css/Services.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

export const Services = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true, easing: 'ease' })

    })

    return (
        <div id='services' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Services</h2>
            <p>
              Through a profound analysis, SGI helps you identify, analyze, assess,
            </p>
          
            <p>
              and appropriately AWARD your organization in the following areas:
            </p>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='column' data-aos={d.aos}>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p className="service-text">{d.text}</p>
                  </div>
                </div>
              ))
              : 'loading'}
          </div>
  
  
  
  
  
  
        </div>
      </div>
    )
}

