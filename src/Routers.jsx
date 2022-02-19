import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about-me" element={<About />}/>
            <Route path="portfolio" element={<Portfolio />}/>
            <Route path="contact-me" element={<Contact />} />
        </Routes>
    )
}

export default Routers
