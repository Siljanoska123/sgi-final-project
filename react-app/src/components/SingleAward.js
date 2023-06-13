
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import JsonData from '../data/data.json'
import '../css/SingleAward.css'
import '../css/containerAward.css'
import aboutus from '../images/about.jpg'

export const SingleAward = (props) => {
    const { awardId } = useParams();
    const award = JsonData.Awards.find((award) => award.id === awardId);
    const { slika, title, description, keySteps, TopicBenefits, benefits, TopicKeySteps, id } = award;
    const [showDescription, setShowDescription] = useState(false);

    const [showBenefits, setShowBenefits] = useState(false);

    // https://stackoverflow.com/questions/45497597/vertical-split-screen-custom-shape



    return (
        <div >
            <header id='header'>
                <div className='cover-intro'>
                    <section className='banner-one'>
                        <div class="shape1"  >
                            <img className='awardslika' src={slika} alt="image" />
                        </div>

                        <div className='awardContainer'>
                            <div class="row">
                                <div class="banner-one__inner-box">
                                    <h2 class="banner-one__big-title">{title}</h2>
                                    <div class="banner-one__content">'
                                        <div class="section-title">
                                            <div class="section-title__tagline" >

                                                <span class="left"></span>
                                                <div className="single-award-title">
                                                    <h2>{title}</h2>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>



                <div className='container'>

                    <div className="inner">

                        <div className='award-deck'>
                            <h3>Description</h3>
                            <p >{description}</p>
                        </div>

                        <div className='award-deck'>
                            <h3>{TopicKeySteps}</h3>

                            <div className='keysteps'>
                                {keySteps.map(item => {
                                    return (
                                        <p>{item}</p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='award-deck2'>

                            <h3>{TopicBenefits}</h3>
                            <ol className="steps">
                                {benefits.map(item => {
                                    return (
                                        <li>{item.napred}
                                            <p>{item.pozadi}</p>
                                        </li>
                                    )
                                })}


                            </ol>

                        </div>






                        {/* <div className='award-deck'>
                            <h3>{TopicKeySteps}</h3>
                            <ol>
                                {keySteps.map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ol>
                        </div>


                        <div className='award-deck'>
                            <h3>{TopicBenefits}</h3>
                            <ol>
                                {benefits.map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ol>
                        </div> */}




                    </div>
                </div>
                <div className='container'>
                    {/* <ul id="menu">
                        <li> <a href="#" >Item 1</a> </li>
                        <li> <a href="#">Item 2</a> </li>
                        <li class="highlighted"> <a href="#">Item 3</a> </li>
                        <li> <a href="#">Item 4</a> </li>
                        <li> <a href="#">Item 5</a> </li>

                    </ul> */}



                </div>
            </header>
        </div>
    )
}



