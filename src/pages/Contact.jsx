import React from 'react';
import animationLottiData from '../assets/Lotti/contact.json';
import Lottie from 'lottie-react';
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div id='contact' className="pt-4 hero bg-gray-200 min-h-screen shadow-lg ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" lg:text-left">
                    <h1 className="text-4xl text-sky-500 font-bold text-center ">Contact US</h1>
                    <Lottie className=" mx-10 mt-2 w-[400px] h-[250px]" animationData={animationLottiData} />
                    <div className=" text-black text-sm space-y-3 px-20">
                        <div className="flex  items-center gap-2">
                            <AiFillHome className="text-xl text-sky-500" />
                            <span>
                                House # 1/2, 4th Floor, Flat # C-4, Block-A,<br />
                                Asad Avenue, Mohammadpur, Dhaka-1207
                            </span>
                        </div>
                        <div className="flex  items-center gap-2">
                            <MdEmail className="text-xl text-sky-500" />
                            <span>info@eonsystemsbd.com</span>
                        </div>
                    </div>
                </div>

                <div className="card bg-sky-200 text-[#495057] text-sm w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <fieldset className="fieldset">
                            <label className="  label">Name:</label>
                            <input type="text" className="bg-white input" placeholder="Enter your name" />

                            <label className="label">Email:</label>
                            <input type="email" className="bg-white input" placeholder="Enter your email" />

                            <label className="label">Subject:</label>
                            <input type="text" className="bg-white input" placeholder="Enter your subject" />

                            <label className="label">Message:</label>
                            <textarea className="bg-white input" placeholder="Type here your message.." rows="8"></textarea>

                            <button className="btn text-sm p-4 border-0 bg-sky-600 hover:bg-sky-800 mt-4 rounded-4xl">Send Message</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;