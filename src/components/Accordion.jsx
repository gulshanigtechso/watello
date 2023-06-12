import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPlusLg } from "react-icons/bs";

const Accordion = ({ accData }) => {

    const [isClicked, setIsClicked] = useState(1);

    const handleIsClicked = (id) => {
        if (isClicked === id) {
            return setIsClicked(null);
        }
        setIsClicked(id);
    };


    return (
        <div className='my-10'>
            {
                accData.map(item => {
                    const { id, title, content } = item;
                    return (
                        <div className="border border-gray-300 rounded-md shadow-xl overflow-hidden [&:not(:last-child)]:mb-6" key={id}>
                            {/* Accordion Title */}
                            <div
                                className={`p-[1.2rem] flex justify-between items-center cursor-pointer select-none transition duration-300 ${isClicked === id ? 'bg-textColor2 text-white' : 'bg-white'}`}
                                onClick={() => handleIsClicked(id)}
                            >
                                <h2 className='sm:text-[1.08rem] font-semibold tracking-wide'>{title}</h2>
                                <div>
                                    <BsPlusLg className={`text-xl transition-transform duration-300 ${isClicked === id ? 'rotate-45' : null}`} />
                                </div>
                            </div>

                            {/* Accordion Content */}
                            <AnimatePresence>
                                {
                                    isClicked === id && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='overflow-clip'
                                        >
                                            <p className='text-[0.95rem] p-[1.2rem] leading-relaxed text-left'>{content}</p>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Accordion;
