import React from 'react';
import { BsPlayFill, BsPlus } from 'react-icons/bs';
import Button from '../components/Button';
import Slider from '../components/Slider';
import testiData from '../data/testiData';
import accordionData from '../data/accordionData';
import Accordion from '../components/Accordion';


const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className='bg-bgColor'>
                <div className="container">
                    <div className="grid grid-cols-1 gap-8 items-center pt-28 text-center lg:grid-cols-2 lg:pt-16 lg:gap-0 lg:text-left">
                        <div>
                            <h1 className='text-3xl sm:text-5xl font-extrabold'>
                                <span className='text-textColor1'>Professional</span> Cleaning <br /> service for your home
                            </h1>

                            <p className='mt-4 mb-10 text-slate-600'>With Reliable, Friendly and Trustful being our company values, <br />
                                we are present ourselves with the most complete and up to date <br />
                                cleaning services.</p>

                            <div className='inline-flex flex-col justify-center items-start gap-8 sm:flex-row sm:items-center lg:justify-start'>
                                <Button btnTxt="Book A Service" />

                                <button className='flex items-center gap-2.5 mx-auto lg:mx-0'>
                                    <span className='vidBtn'>
                                        <BsPlayFill className='text-xl' />
                                    </span>
                                    <span className='text-textColor1 font-semibold'>Watch our service</span>
                                </button>
                            </div>

                            <div className="flex justify-center gap-6 mt-10 sm:mt-16 lg:justify-start">
                                <div>
                                    <div className='flex justify-center items-center gap-1 font-extrabold mb-2.5 lg:justify-start'>
                                        <h3 className='text-3xl text-textColor1'>2760</h3>
                                        <h6><BsPlus className='stroke-2 text-xs' /></h6>
                                    </div>
                                    <h6 className='text-sm font-bold text-gray-600'>Total Customer</h6>
                                </div>

                                <div className='border border-dashed border-textColor3 opacity-20 my-2'></div>

                                <div>
                                    <div className='flex justify-center items-center gap-1 font-extrabold mb-2.5 lg:justify-start'>
                                        <h3 className='text-3xl text-textColor1'>25</h3>
                                        <h6><BsPlus className='stroke-2 text-xs' /></h6>
                                    </div>
                                    <h6 className='text-sm font-bold text-gray-600'>Years Experience</h6>
                                </div>

                                <div className='border border-dashed border-textColor3 opacity-20 my-2'></div>

                                <div>
                                    <div className='flex justify-center items-center gap-1 font-extrabold mb-2.5 lg:justify-start'>
                                        <h3 className='text-3xl text-textColor1'>328</h3>
                                        <h6><BsPlus className='stroke-2 text-xs' /></h6>
                                    </div>
                                    <h6 className='text-sm font-bold text-gray-600'>Team Members</h6>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/images/hero-img.png" alt="hero-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className='pt-14 pb-14 lg:pt-20 lg:pb-14'>
                <div className="container">
                    <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-2 lg:gap-32 lg:text-left">
                        <div className='relative'>
                            <h6 className='chip'>About us</h6>
                            <h2 className='text-3xl sm:text-4xl font-extrabold text-textColor2 mt-6 leading-tight'>We Are Providing Best <br /> Cleaning Services</h2>
                            <div className='static mt-7 lg:mt-0 lg:absolute lg:-bottom-14'>
                                <img src="/images/about-img.png" alt="" loading='lazy' />
                            </div>
                        </div>

                        <div>
                            <p>For over 15 years, customers have welcomed the trusted
                                cleaning professionals from locally owned and operated
                                businesses into their homes.</p>
                            <Accordion accData={accordionData} />
                            <Button btnTxt="Contact Us" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why-us Section */}
            <section className='bg-bgColor pt-14 lg:pt-20 lg:pb-0'>
                <div className="container">
                    <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-2 lg:gap-32 lg:text-left">
                        <div className='relative'>
                            <h6 className='chip'>Why Choose us?</h6>
                            <h2 className='text-3xl sm:text-4xl font-extrabold text-textColor2 mt-6 leading-tight'>We maintain healthy, <br /> environments through <br /> our services</h2>
                            <p className='mt-4 mb-8'>Our environment has a large impact on our health and well-
                                being, an important part of living well is doing our part to
                                take care of the environment.</p>
                            <Button btnTxt="Contact Us" />

                            <div className='hidden lg:block absolute bottom-0 right-16'>
                                <img src="/images/whyus-img1.png" alt="" className='w-52' loading='lazy' />
                            </div>
                        </div>

                        <div>
                            <div className='rounded-lg overflow-hidden'>
                                <img src="/images/whyus-img2.jpg" alt="" loading='lazy' />
                            </div>
                            <div className='flex flex-col md:flex-row justify-between mt-8 pb-16 gap-8 lg:gap-0'>
                                <div>
                                    <img src="/images/icons/medal.png" alt="" className='w-10 mx-auto lg:mx-0' />
                                    <h6 className='font-bold mt-3 my-2.5'>Quality is our property</h6>
                                    <p className='text-sm text-gray-500'>While we are by no means perfect, <br /> if you're not happy with the job.</p>
                                </div>

                                <div className='border border-dashed border-pink-200 my-3'></div>

                                <div>
                                    <img src="/images/icons/shield.png" alt="" className='w-10 mx-auto lg:mx-0' />
                                    <h6 className='font-bold mt-3 my-2.5'>Commitment to safety</h6>
                                    <p className='text-sm text-gray-500'>While we are by no means perfect, <br /> if you're not happy with the job.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testi Section */}
            <section className='pt-14 pb-14 lg:pt-20'>
                <div className="container">
                    <div className='text-center'>
                        <h6 className='chip'>Testimonials</h6>
                        <h2 className='text-3xl sm:text-4xl font-extrabold text-textColor2 mt-6 leading-tight'>What our clients say...</h2>
                    </div>
                    <Slider slideData={testiData} />
                </div>
            </section>
        </main>
    );
};

export default Home;
