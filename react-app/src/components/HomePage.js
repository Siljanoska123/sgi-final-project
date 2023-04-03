import React, { useEffect, useState } from "react";
import JsonData from './../data/data.json'
import { Header } from "./Header";
import { About } from "./About";
import { MissionVision } from "./MissionVision";
import { Counter } from "./Counter";
import {Contact} from './Contact'
import {Services} from './Services'

export const HomePage = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

// const countEl = document.getElementById('count')
// updateVisitorCount()
// function updateVisitorCount() {
//     fetch(`http://localhost:9005`)
//         .then(res => res.json())
//         .then(res => {
//             countEl.innerHTML = res.value
//         })
  
// }


    return (

        <div >
          
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Counter />
            <MissionVision data={landingPageData.Mission} />
            <Services data={landingPageData.Services}/>
            <Contact data={landingPageData.Footer}/> 
        </div>


    )
}