import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaMobileRetro } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Services = () => {
    return (
        <div id='services' className="pt-20  bg-gray-200 min-h-screen shadow-lg ">
            <div className="flex justify-center">
                <div className="content-center text-[#556877] max-w-md text-center text-[#556877]">
                    <h1 className="text-center text-sky-500  mb-5 text-4xl font-bold">Our Services</h1>
                    <p className="text-center mb-5">
                        If you're <strong>looking for website designers</strong> in Bangladesh or <strong>web improvement services</strong> in Bangladesh you've come to the proper place.
                    </p>
                </div>

            </div>
            <div className="flex justify-center">
                <div className='lg:ml-15 grid grid-cols-1 lg:grid-cols-2   gap-4 lg:gap-6 pb-20'>
                    {/* row-1 */}
                    <div className="card bg-[#D4EBF8] text-[#444444] w-96 shadow-md ">
                        <div className="card-body">
                            <h2 className=" text-center card-title lg:text-xl hover:text-sky-500 "><CgWebsite/>WEB DEVELOPMENT</h2>
                            <p className='text-justify'>Digital Web Pulse crew has been named as the nice professional and experienced agency for net designing, Portal development and absolutely featured versatile, unique...</p>
                        </div>
                    </div>
                    {/* row-2 */}
                    <div className="card bg-[#ECEFCA] text-[#444444] w-96 shadow-md">
                        <div className="card-body">
                            <h2 className=" text-center card-title lg:text-xl hover:text-sky-500 "><FaMobileRetro />MOBILE APP DEVELOPMENT</h2>
                            <p className='text-justify'>Digital Web Pulse is the great mobile app development company in Dhaka with knowledge in all sort of Mobile Applications layout and development...</p>
                        </div>
                    </div>
                    {/* row-3 */}
                    <div className="card bg-[#DAD3BE] text-[#444444] w-96 shadow-md">
                        <div className="card-body">
                            <h2 className="text-center card-title lg:text-xl hover:text-sky-500 "><SiPaloaltosoftware />SOFTWARE DEVELOPMENT</h2>
                            <p className='text-justify'>Digital Web Pulse gives Custom Software Development Service to deliver cost-powerful and dependable software solutions matching your specific needs...</p>
                        </div>
                    </div>
                    {/* row-4 */}
                    <div className="card bg-[#90D1CA] text-[#444444] w-96 shadow-md">
                        <div className="card-body">
                            <h2 className=" text-center card-title lg:text-xl hover:text-sky-500 "><MdOutlineMiscellaneousServices />B2B/B2C SERVICES</h2>
                            <p className='text-justify'>Digital Web Pulse is a leading employer offering SEO offerings for ultimate 5+ years. Our SEO approach makes us the first preference among various choices...</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Services;