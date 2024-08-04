import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './About'
import Home from './Home/index'
import Resume from './Resume'
import Skills from './Skills'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Navbar from './Navbar'
import './App.css';

// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"
// import ParticlesConfig from './utils/Particles.js'
// import { useCallback } from "react"

function Routers() {



    return (
        <div className="font-robo-fonts max-h-max">
            <BrowserRouter>
                <Navbar />
                <div className="App_main_content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Routers
