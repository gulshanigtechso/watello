import React, { useEffect, useState } from 'react';
import headerData from '../data/headerData';
import Button from './Button';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleIsSticky = () => {
            window.scrollY > 80 ? setIsSticky(true) : setIsSticky(false);
        };
        window.addEventListener('scroll', handleIsSticky);
        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, [isSticky]);

    // toggling the Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // closing the Sidebar on clicking outside of it.
    window.addEventListener('click', (e) => {
        if (e.target.closest('section')) {
            setIsSidebarOpen(false);
        }
    });

    // disable the body-scroll when the Sidebar is open.
    const docBody = document.body;
    isSidebarOpen ? docBody.classList.add('overflow-hidden') : docBody.classList.remove('overflow-hidden');


    return (
        <header className={`fixed z-50 w-full py-4 bg-bgColor transition ${isSticky ? 'shadow-lg' : null}`}>
            <div className="container">
                <nav className='hidden lg:flex justify-between items-center'>
                    <div>
                        <a href="/" className='text-2xl font-extrabold'>watello</a>
                    </div>

                    <div className='flex gap-8'>
                        {
                            headerData.map(item => {
                                const { id, link, path, cls } = item;
                                return <a href={path} key={id} className={`navlinks ${cls}`}>{link}</a>;
                            })
                        }
                    </div>

                    <div>
                        <Button btnTxt="Free Consultation" cls="btnOutlined" />
                    </div>
                </nav>

                {/* mobile-header */}
                <nav className='flex justify-between items-center lg:hidden'>
                    <div>
                        <a href="/" className='text-2xl font-extrabold'>watello</a>
                    </div>

                    {/*===== Sidebar =====*/}
                    <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
                        <div className="sidebar_head">
                            <a href="/" className='text-2xl font-extrabold'>watello</a>
                        </div>
                        <div className="sidebar_body">
                            <ul>
                                {
                                    headerData.map(item => {
                                        const { id, link, path, cls } = item;
                                        return <a href={path} key={id} className={`navlinks ${cls}`}>{link}</a>;
                                    })
                                }
                            </ul>
                        </div>
                        <div className="sidebar_foot">
                            <p>&#169; {new Date().getFullYear()} | watello</p>
                            <div className='flex gap-1 mt-3'>
                                <a href="/">Privacy</a>
                                -
                                <a href="/">Terms</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className='sidebar_btn'
                        onClick={toggleSidebar}
                        title={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Header;
