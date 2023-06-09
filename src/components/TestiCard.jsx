import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';

const TestiCard = (props) => {

    const { name, stars, review, details, time } = props;

    return (
        <div>
            {/* <div>
                <div className='w-16 h-16 overflow-hidden rounded-full mx-auto'>
                    <img src="https://st.depositphotos.com/1594308/2526/i/450/depositphotos_25262411-stock-photo-businessman.jpg" alt="" className='w-full h-full object-cover' />
                </div>

                <div>
                    <h3 className='font-semibold'>{name}</h3>
                    <p className='text-sm'>Hired on Thumbtack</p>
                </div>

                <div>
                    <div className='flex justify-center'>
                        {[...new Array(stars)].map((_, i) => <BsStarFill key={i} className='fill-bgBtnColor' />)}
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
            <blockquote className='mt-4 mb-2'>
                {review}
            </blockquote>
            <div className='flex'>
                <p>Details:</p>
                <div className='flex gap-7'>
                    {
                        details.map((item, i) => <span key={i}>{item}</span>)
                    }
                </div>
            </div> */}


            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 overflow-hidden rounded-full border-orange-200 border-[3px]'>
                        <img src="https://st.depositphotos.com/1594308/2526/i/450/depositphotos_25262411-stock-photo-businessman.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>{name}</h3>
                        <p className='text-sm'>Hired on Thumbtack</p>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        {[...new Array(stars)].map((_, i) => <BsStarFill key={i} className='fill-bgBtnColor' />)}
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
            <blockquote className='mt-6 mb-5 indent-24 relative'>
                <FaQuoteLeft className='absolute -top-1 left-16 fill-orange-200 text-xl' />
                {review}
            </blockquote>
            <div className='flex gap-4 lg:items-center'>
                <p className='font-bold'>Details:</p>
                <div className='flex gap-x-4 gap-y-2 lg:gap-5 flex-wrap'>
                    {
                        details.map((item, i) => <span key={i} className='font-semibold text-[14px]'>&#183; {item}</span>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TestiCard;
