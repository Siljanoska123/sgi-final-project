import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import './App.css'
import Navbar from './components/Navbar'
import JsonData from './data/data.json'
import { Footer } from './components/Footer'
import { Footer2 } from './components/Footer2'
import {AwardsT} from './components/Awards'
import {SingleAward} from './components/SingleAward'
import { Marga } from './components/marga'
import { Navigacija } from './components/navigacija'

// import Aos from 'aos'
// import 'aos/dist/aos.css'

// Aos.init()



function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);





  
  







  return (
    <div >


      <Navbar />
    

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/awards" element={<AwardsT data={landingPageData.Awards} />} />

       <Route path='/awards/:awardId' element={<SingleAward/>} /> 
       <Route path='/marga' element={<Marga/>} /> 
       <Route path='/navigacija' element={<Navigacija/>} /> 
      </Routes>
      <Footer data={landingPageData.Footer} />
      <Footer2 />
    </div>
  )
}

export default App
