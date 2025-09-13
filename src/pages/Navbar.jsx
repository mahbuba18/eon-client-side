import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { scrollSpy } from 'react-scroll';
import { ImFacebook2 } from "react-icons/im";
import navImg from'../assets/image/eon.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 🛠 Trigger scrollSpy manually after mount
        setTimeout(() => {
            scrollSpy.update();
        }, 100); // Short delay allows the page to render before updating

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const links = (
        <>
            <style>
                {`
          .active-link {
            color: text-sky-700;
            font-weight: bold;
            font-size: 14px;
            background-color:rgba(24, 25, 26, 0.1)
          },

         `}
            </style>
            <li ><Link to="home" smooth={true} duration={500} spy={true} hashSpy={true} isDynamic={true} activeClass="active-link">Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active-link">About Us</Link></li>
            <li><Link to="services" smooth={true} duration={500} spy={true} activeClass="active-link">Services</Link></li>
            {/* <li><Link to="portfolio" smooth={true} duration={500} spy={true} activeClass="active-link">Portfolio</Link></li> */}
            {/* <li><Link to="gallery" smooth={true} duration={500} spy={true} activeClass="active-link">Gallery</Link></li> */}
            <li><Link to="contact" smooth={true} duration={500} spy={true} activeClass="active-link">Contact Us</Link></li>
        </>
    );

    return (
        <div className={` h-2 fixed navbar px-6 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-gray-200 shadow-lg' : 'bg-transparent'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-sky-500 border-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-sky-500 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href="/"><img className="w-26 h-9" src={navImg} alt="Logo"/></a>
            </div>
            <div className=" navbar hidden lg:flex justify-center text-sky-600 ">
                {/* <ul className="menu text-white menu-horizontal px-1">
                    {links}
                </ul> */}
                <ul className={`menu menu-horizontal px-1 ${scrolled ? 'text-sky-500' : 'text-white'}`}>
                    {links}
                </ul>
            </div>
            {/* text-[#73C7C7] */}
            <div className='navbar-end flex text-2xl gap-2 text-sky-400 '>
                <a href='https://www.facebook.com/eonsystemsbd' target='_blank'> <ImFacebook2 className='hover:text-sky-600' /></a>
                <a href='https://www.linkedin.com/company/eon-systems-bd' target='_blank'><BsLinkedin className='hover:text-sky-600' /></a>

            </div>
        </div>
    );
};

export default Navbar;
