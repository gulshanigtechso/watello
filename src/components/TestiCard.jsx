import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const TestiCard = (props) => {

    const { name, stars, review, details, time } = props;

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='w-16 h-16 overflow-hidden rounded-full'>
                        <img src="https://st.depositphotos.com/1594308/2526/i/450/depositphotos_25262411-stock-photo-businessman.jpg" alt="" className='object-cover' />
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
            <blockquote className='mt-4 mb-2'>
                {review}
            </blockquote>
            <div>
                <p>Details</p>
            </div>
        </div>
    );
};

export default TestiCard;
