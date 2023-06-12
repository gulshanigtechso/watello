import React, { useEffect, useState } from 'react';
import headerData from '../data/headerData';
import Button from './Button';

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
    const docBody = document.documentElement;
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

                    {/* Sidebar */}
                    <div className={`sidebar fixed top-0 left-0 z-[99] w-full h-full bg-black bg-opacity-50 pointer-events-none opacity-0 transition-opacity duration-300 ${isSidebarOpen ? 'show' : ''}`}>
                        <div className='sidebar_content max-w-[250px] w-full h-full bg-bgColor shadow-2xl p-8 text-center'>
                            <div className="py-10">
                                <a href="/" className='text-2xl font-extrabold'>watello</a>
                            </div>
                            <div className="py-10 border-t border-b border-dashed border-gray-400">
                                <ul className='grid gap-4'>
                                    {
                                        headerData.map(item => {
                                            const { id, link, path, cls } = item;
                                            return <li key={id}><a href={path} className={`navlinks ${cls}`}>{link}</a></li>;
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="py-10">
                                <div>
                                    <Button btnTxt="Free Consultation" cls="btnOutlined" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='sidebar_btn'
                        onClick={toggleSidebar}
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
