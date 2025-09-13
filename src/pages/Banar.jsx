import React from 'react';
import bgImage from '../assets/image/b5.jpg';
import { motion } from "motion/react";
import lottiAnimation from "../assets/Lotti/bannar.json";
import Lottie from 'lottie-react';
import { Link } from 'react-scroll';

const Banar = () => {
    return (
        <div id='home' className="hero bg-transparent min-h-screen shadow-lg bg-cover bg-center" style={{
            backgroundImage:
                `url(${bgImage})`,
        }}>
            <div className="hero-content flex-col bg-transparent lg:flex-row">

                <Lottie className="  w-[400px] h-[400px]" animationData={lottiAnimation}></Lottie>

                <div >
                    <h1 className="text-5xl text-sky-500 font-bold">Welcome to  <motion.span initial={{ color: "#ffffff" }} animate={{ color: "#03A791" }} transition={{ duration: 5, repeat: Infinity }}>EON Systems</motion.span> </h1>
                    <p className="text-[#ffffff] py-6">
                        "Where innovation meets experience — connecting the future with AI, IoT and trust."
                    </p>
                    <Link to="about" smooth={true} duration={500}>
                        <button className="btn bg-transparent text-white border-white border-radius-4 mr-4 border-2xl hover:bg-sky-500 hover:border-sky-500 hover:text-white">
                            Get Started
                        </button>
                    </Link>

                    <Link to="services" smooth={true} duration={500}>
                        <button className="btn bg-transparent border-2xl text-white border-white hover:bg-sky-500 hover:border-sky-500 hover:text-white">
                            Our Services
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banar;