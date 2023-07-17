
import React, { useState, useRef, setState } from 'react'
import { Link, useParams } from 'react-router-dom';
import JsonData from '../data/data.json'
import '../css/SingleAward.css'
import '../css/containerAward.css'
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export const SingleAward = (props) => {
    const { awardId } = useParams();
    const award = JsonData.Awards.find((award) => award.id === awardId);
    const { slika, title, description, keySteps, TopicBenefits, benefits, TopicKeySteps, id } = award;

    // https://stackoverflow.com/questions/45497597/vertical-split-screen-custom-shape

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let navigate = useNavigate();
    // za formata od modalot


    const publicKey = '1'
    const serviceID = '12'
    const templateID = '123'
    // const clearState = () => setState({ ...initialState });


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);

                alert('Message Sent Successfully ')
                navigate('/awards')
                // clearState();
            }, (error) => {
                console.log(error.text);
                console.log('Try again!');
            });
    };

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
                                    <div class="banner-one__content">
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
                    </div>
                </div>

                {/* MODAL */}

                <div className='container'>
                    <div className="inner">

                        <div className='award-deck3' >

                            <Button className="loHemt" variant="primary" onClick={handleShow}>
                                <svg viewBox="0 0 512 512" color="currentColor" mr="12px" xmlns="http://www.w3.org/2000/svg" className="sc-1f4f182b-0 dndkUl">

                                    <path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="30">
                                    </path>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="30" d="M176 272l80 80 80-80M256 48v288">
                                    </path>
                                </svg>
                                <div>DOWNLOAD BROCHURE</div>

                            </Button>

                            <Modal
                                size="lg"
                                show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >

                                    <div className='modal_form'>

                                        <form ref={form} onSubmit={sendEmail}>
                                            <label for='user_name'>Full Name</label>
                                            <input type="text" name="user_name" id="user_name" placeholder='Full name'>
                                            </input>
                                            <label for='user_email'>Email</label>
                                            <input type="email" name="user_email" id='user_email' placeholder='Email' required>
                                            </input>
                                            <label for='message'>Message</label>
                                            <textarea type='message' readOnly name="message" id='message' placeholder='Your message'>{title}
                                            </textarea>
                                            <button onClick={handleClose} type='submit' id='button' value="Send email" className='submit-btn'>
                                                GET BROCHURE
                                            </button>
                                        </form>

                                    </div>
                                </Modal.Body>
                                <Modal.Footer>

                                    {/* <Button variant="primary" onClick={handleClose}>
                                        GET BROCHURE
                                    </Button> */}
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>


                </div>
            </header>
        </div>
    )
}





