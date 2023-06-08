import React from 'react';
import { footLinks1, footLinks2, footLinks3, footLinks4, footLinks5 } from '../data/footerData';

const Footer = () => {
    return (
        <footer className='pt-16 pb-8 bg-bgColor2'>
            <div className="container">
                <div className="grid grid-cols-6">
                    <div>
                        <a href="/">watello</a>
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

                <div className='text-sm mt-5'>
                    <p>&#169; {new Date().getFullYear()}</p>
                    <div className='flex gap-1'>
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
