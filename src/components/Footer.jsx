import React from 'react';
import { footLinks1, footLinks2, footLinks3, footLinks4, footLinks5 } from '../data/footerData';

const Footer = () => {
    return (
        <footer className='pt-10 pb-8 bg-bgColor2 text-center lg:text-left lg:pt-16'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10">
                    <div className='col-auto lg:col-span-2'>
                        <a href="/" className='font-extrabold text-xl'>watello</a>
                        <p className='mt-2 text-sm text-slate-600'>With Reliable, Friendly and Trustful being our company values,
                            we are present ourselves with the most complete and up to date
                            cleaning services.</p>
                    </div>

                    <div>
                        <h5 className='font-bold'>Services</h5>
                        <div className='footlinks'>
                            {
                                footLinks1.map(item => {
                                    const { id, link, path } = item;
                                    return <a href={path} key={id}>{link}</a>;
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <h5 className='font-bold'>About</h5>
                        <div className='footlinks'>
                            {
                                footLinks2.map(item => {
                                    const { id, link, path } = item;
                                    return <a href={path} key={id}>{link}</a>;
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <h5 className='font-bold'>COVID-19</h5>
                        <div className='footlinks'>
                            {
                                footLinks3.map(item => {
                                    const { id, link, path } = item;
                                    return <a href={path} key={id}>{link}</a>;
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <h5 className='font-bold'>FAQ</h5>
                        <div className='footlinks'>
                            {
                                footLinks4.map(item => {
                                    const { id, link, path } = item;
                                    return <a href={path} key={id}>{link}</a>;
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <h5 className='font-bold'>Contact</h5>
                        <div className='footlinks'>
                            {
                                footLinks5.map(item => {
                                    const { id, link, path } = item;
                                    return <a href={path} key={id}>{link}</a>;
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='text-sm mt-12 lg:mt-5'>
                    <p>&#169; {new Date().getFullYear()}</p>
                    <div className='flex gap-1 justify-center lg:justify-start'>
                        <a href="/">Privacy</a>
                        -
                        <a href="/">Terms</a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
