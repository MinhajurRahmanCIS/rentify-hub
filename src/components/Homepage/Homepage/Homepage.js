import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Team from '../Team/Team';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Contact/>
            <Team/>
            <Features/>
            <Testimonial/>
        </div>
    );
};

export default Homepage;