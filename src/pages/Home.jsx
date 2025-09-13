import React from 'react';
import Banar from './Banar';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Team from './Team';


const Home = () => {
    return (
        <div className='bg-white shadow-lg'>
            <Banar></Banar>
            <About></About>
            <Services></Services>
            {/* <Team></Team> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;