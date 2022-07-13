import React from 'react';
import './Home.css'
import Button from '@mui/material/Button';
import Nav from './components/Nav';
import About from './components/About';
import Overlay from './components/Overlay';
import HomeImg from './components/HomeImg';
import WhyUs from './components/WhyUs';
import Help from './components/Help';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Nav className='nav'/>
            <Overlay />
            <HomeImg />
            <About />
            <WhyUs />
            <Help />
            <Footer />
        </div>
    );
}

export default Home;
