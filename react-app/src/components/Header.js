import React from 'react'
import '../css/Header.css'

import video from '../video.mp4'


export const Header = (props) => {
    return (
        <header id='header'>
        <div className='intro'>
          <video src={video} loop autoPlay muted className="background-video">

          </video>
          <div className='overlay'></div>



          <div className=' intro-text '>

            <h1>
              {props.data ? props.data.title : 'Loading'}
              <span></span>
            </h1>
            <p>{props.data ? props.data.paragraph : 'Loading'}</p>
            <a
              href='/awards'
              className='button-header'
            >
              Learn More
            </a>{' '}

          </div>




        </div>

      </header>
    )
  }
  