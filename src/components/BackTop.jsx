import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackTop = () => {

    const [isBackTopVisible, setIsBackTopVisible] = useState(false);

    useEffect(() => {

        const showBackTop = () => {
            window.scrollY >= 500 ? setIsBackTopVisible(true) : setIsBackTopVisible(false);
        };

        window.addEventListener('scroll', showBackTop);

        return () => {
            window.removeEventListener('scroll', showBackTop);
        };
    }, [isBackTopVisible]);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <button onClick={goTop} className={`btn fixed z-40 bottom-5 right-5 p-0 bg-bgBtnColor w-8 h-8 justify-center rounded-full opacity-0 translate-y-full transition ${isBackTopVisible ? 'opacity-100 transform-none' : null}`}>
            <FiArrowUp className='w-5 h-5' />
        </button>
    );
};

export default BackTop;
