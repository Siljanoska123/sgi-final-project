
import React from 'react'
import JsonData from '../data/data.json'
import { Link } from 'react-router-dom'
import '../css/Awards.css'
import { SingleAward } from './SingleAward'

export const AwardsT = (props) => {
  console.log(JsonData.Awards)


  return (
    <div id="awards" className='text-center'>
      <div className="container">
      {props.data
          ? props.data.map((d, id) => (
            <article className="card" key={`${d.title}-${id}`}  >
              <header className="card__thumb">
                <a><img src={d.slika} /></a>
              </header>
              <div className="card__body">
                <div className="card__category"><a ><b>A w a r d</b></a></div>
                <h2 className="card__title"><a >{d.title}</a></h2>

                {/*             
                <button type="button" className="card__subtitle" data-toggle="modal" data-target={`#myModal${i}`}>
                  more
                </button> */}

                <Link to={`/awards/${d.id}`} >
                  more
                 
                </Link>

                {/* <div className='row'>

                  <PopUp data={d} i={i} />
                </div> */}


                <p className="card__description">
                  {d.description}
                </p>



              </div>
              <footer className="card__footer">
                <span className="icon ion-clock"></span> <i className="fa fa-star-o" aria-hidden="true"> 10 </i>

                <span className="icon ion-chatbox"></span> <i className='fa fa-comment-o'> 145</i>
              </footer>
            </article>


     
            ))
            : "loading"}


      </div>


    </div>


  )
}
