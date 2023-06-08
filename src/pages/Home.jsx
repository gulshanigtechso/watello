import React from 'react';
import { BsPlayFill, BsPlus } from 'react-icons/bs';
import Button from '../components/Button';
import Accordions from '../components/Accordions';
import Slider from '../components/Slider';
import testiData from '../data/testiData';


const Home = () => {
    return (
        <main>
            <section className='bg-bgColor min-h-screen'>
                <div className="container">
                    <div className="grid grid-cols-2 justify-center items-center pt-16">
                        <div className='mx-auto'>
                            <h1 className='text-5xl font-extrabold'>
                                <span className='text-textColor1'>Professional</span> Cleaning <br /> service for your home
                            </h1>

                            <p className='mt-4 mb-10 text-slate-600'>With Reliable, Friendly and Trustful being our company values, <br />
                                we are present ourselves with the most complete and up to date <br />
                                cleaning services.</p>

                            <div className='flex items-center gap-8'>
                                <Button btnTxt="Book A Service" />

                                <button className='flex items-center gap-2.5'>
                                    <span className='vidBtn'>
                                        <BsPlayFill className='text-xl' />
                                    </span>
                                    <span className='text-textColor1 font-semibold'>Watch our service</span>
                                </button>
                            </div>

                            <div className="flex gap-6 mt-16">
                                <div>
                                    <div className='flex items-center gap-1 font-extrabold mb-2.5'>
                                        <h3 className='text-3xl  text-textColor1'>2760</h3>
                                        <h6><BsPlus className='stroke-2 text-xs' /></h6>
                                    </div>
                                    <h6 className='text-sm font-bold text-gray-600'>Total Customer</h6>
                                </div>

                                <div className='border border-dashed border-textColor3 opacity-20 my-2'></div>

                                <div>
                                    <div className='flex items-center gap-1 font-extrabold mb-2.5'>
                                        <h3 className='text-3xl  text-textColor1'>25</h3>
                                        <h6><BsPlus className='stroke-2 text-xs' /></h6>
                                    </div>
                                    <h6 className='text-sm font-bold text-gray-600'>Years Experience</h6>
                                </div>

                                <div className='border border-dashed border-textColor3 opacity-20 my-2'></div>

                                <div>
                                    <div className='flex items-center gap-1 font-extrabold mb-2.5'>
                                        <h3 className='text-3xl  text-textColor1'>328</h3>
                                        <h6><BsPlus className='stroke-2 text-xs' /></h6>
                                    </div>
                                    <h6 className='text-sm font-bold text-gray-600'>Team Members</h6>
                                </div>
                            </div>
                        </div>

                        <div className='w-9/12 mx-auto'>
                            <img src="/images/hero-img.png" alt="hero-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div>
                            <h6 className='chip'>About us</h6>
                            <h2 className='text-4xl font-extrabold text-textColor2 mt-6 leading-tight'>We Are Providing Best <br /> Cleaning Services</h2>
                        </div>

                        <div>
                            <p>For over 15 years, customers have welcomed the trusted
                                cleaning professionals from locally owned and operated
                                businesses into their homes.</p>

                            <Accordions />

                            <Button btnTxt="Contact Us" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section bg-bgColor'>
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div>
                            <h6 className='chip'>Why Choose us?</h6>
                            <h2 className='text-4xl font-extrabold text-textColor2 mt-6 leading-tight'>We maintain healthy, <br /> environments through <br /> our services</h2>
                            <p className='mt-4 mb-8'>Our environment has a large impact on our health and well-
                                being, an important part of living well is doing our part to
                                take care of the environment.</p>
                            <Button btnTxt="Contact Us" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container">
                    <Slider slideData={testiData} />
                </div>
            </section>
        </main>
    );
};

export default Home;
