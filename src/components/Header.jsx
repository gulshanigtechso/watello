import React from 'react';
import headerData from '../data/headerData';
import Button from './Button';

const Header = () => {
    return (
        <header className='fixed w-full py-5'>
            <div className="container">
                <nav className='flex justify-between items-center'>
                    <div className='mx-auto'>
                        <a href="/" className='text-2xl font-extrabold'>watello</a>
                    </div>

                    <div className='flex gap-8 mx-auto'>
                        {
                            headerData.map(item => {
                                const { id, link, path, cls } = item;
                                return <a href={path} key={id} className={`navlinks ${cls}`}>{link}</a>;
                            })
                        }
                    </div>

                    <div className='mx-auto'>
                        <Button btnTxt="Free Consultation" cls="btnOutlined" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
