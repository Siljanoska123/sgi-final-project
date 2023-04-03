import React, { useState } from 'react';
import { accordionObj } from '../../../data/DataRentSpase';
import { IconContext } from 'react-icons';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function Accordion() {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };
    return (
        <div>
            <IconContext.Provider value={{ color: '#AB42E3', size: '25px' }}>
                < div className='accordion-Section'>
                    < div className='accordion-Container'>
                        <h1 className='pricing__heading'>Frequently asked questions</h1>
                        {accordionObj.map((item, index) => {
                            return (
                                <>
                                    <div className='Wrap' onClick={() => toggle(index)} key={index}>
                                        <h1>{item.question}</h1>
                                        <span>{clicked === index ? <SlArrowUp /> : <SlArrowDown />}</span>
                                    </div>
                                    {clicked === index ? (
                                        <div className='Dropdown'>
                                            <p>{item.answer}</p>
                                        </div>
                                    ) : null}
                                </>
                            );
                        })}
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Accordion