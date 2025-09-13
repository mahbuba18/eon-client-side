import React from 'react';
import lottiDataTeam from '../assets/Lotti/team.json'
import Lottie from 'lottie-react';
import { TbLockSquareRounded } from "react-icons/tb";
import { AiFillPicture } from "react-icons/ai";
import { SiVorondesign } from "react-icons/si";


const About = () => {
    return (
        <div id="about" className=" pb-20 pt-20 bg-white min-h-screen shadow-lg pt-4 lg:px-30 md:px-15 sm:px-10">
            <div className='pb-4'>
                <h1 className="text-center text-sky-500 text-4xl font-bold">About Us</h1>
            </div>
            <div className="pb-10  text-justify text-[#556877] ">
                <strong>EON System</strong> is a system integrator and application service provider based in Dhaka, Bangladesh. We have {new Date().getFullYear()-2008}+ years of market presence and work experience with leading FMCGs, MNCs, and NGOs. Also specialized in serving AI and IoT platforms for connected solutions. It also provides a white-label managed application service to mobile operators and content providers. MREPORTING application platform for field force, not only serving the business enterprises but also non-profit organizations who are directly involved in helping the quality of people's lives in the
            </div>
            <div>
                <div className="lg:flex text-[#556877]  gap-8">

                    <div className="lg:w-1/2 flex justify-center items-center">
                        <Lottie className="w-full max-w-[600px] h-[400px]" animationData={lottiDataTeam} />
                    </div>
                    <div className="lg:w-1/2  text-justify">
                        Over the past years, we've got been fantastic in handing over the pleasant product to our customers. We aren't restricted in terms of location as an alternative we supply the fine service for the duration of the globe. We are powered with the wonderful today's technology & synergistic approach for on-line solutions. Our highly aggressive rates permit your business <strong>internet web page</strong> to dramatically improve income and rankings while retaining your fee range intact. Work with us to agree with it

                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start lg:p-4">
                                <TbLockSquareRounded className="justify-center h-18 w-18 text-gray-600 mt-1 mr-2 hover:text-sky-500" />
                                <div>
                                    <p className='font-bold lg:text-xl hover:text-sky-500'>YOUR 24/7 MARKETING TOOL</p>
                                    <p>Whether you're at work or not, your internet site is continually operating to your business.</p>
                                </div>
                            </li>
                            <li className="flex items-start lg:p-4">
                                <AiFillPicture className="justify-center h-18 w-18 text-gray-600 mt-1 mr-2 hover:text-sky-500" />
                                <div>
                                    <p className='font-bold lg:text-xl hover:text-sky-500'>BRINGING YOUR WEBSITE TO LIFE</p>
                                    <p>Once the course for your website has been decided, we'll start coding to convey it to life.</p>
                                </div>
                            </li>
                            <li className="flex items-start lg:p-4">
                                <SiVorondesign className="justify-center h-18 w-18 text-gray-600 mt-1 mr-2 hover:text-sky-500" />
                                <div>
                                    <p className='font-bold lg:text-xl hover:text-sky-500'>WIREFRAMING AND WEB DESIGN</p>
                                    <p>After the Discovery Session, we begin to drag our thoughts for your internet site together.</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default About;