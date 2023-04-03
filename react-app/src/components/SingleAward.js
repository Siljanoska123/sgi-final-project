
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import JsonData from '../data/data.json'
import '../css/SingleAward.css'

export const SingleAward = (props) => {
    const { awardId } = useParams();
    const award = JsonData.Awards.find((award) => award.id === awardId);
    const { slika, title, description, benefits, id } = award;
    const [showDescription, setShowDescription] = useState(false);

    const [showBenefits, setShowBenefits] = useState(false);

    // https://stackoverflow.com/questions/45497597/vertical-split-screen-custom-shape


    return (
        <div >


            <div className="wrapper">

                <div id='singleAwards'>

                    <div className='container'>
                        <div className="left">
                            <div className="inner">

                                <div className="single-award-title">
                                    <h2>{title}</h2>
                                </div>


                                <div className='award-deck'>
                                    <h3>Description</h3>
                                    <p >{description}</p>
                                </div>



                                <div className='award-deck'>
                                    <h3>Benefits</h3>
                                    <ol>
                                        {benefits.map(item => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })}
                                    </ol>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>




                <div className="right">
                    <div className="inner" style={{ backgroundImage: `url(${slika})` }}></div>

                </div>
            </div>

        </div>

    )
}



