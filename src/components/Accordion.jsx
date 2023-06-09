import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { BiChevronDown } from "react-icons/bi";

const Accordion = ({ accData }) => {

    const [isClicked, setIsClicked] = useState(1);

    const handleIsClicked = (id) => {
        if (isClicked === id) {
            return setIsClicked(null);
        }
        setIsClicked(id);
    };

    // const [show, setShow] = useState(false);


    return (
        <div className='my-10'>
            {
                accData.map(item => {
                    const { id, title, content } = item;
                    return (
                        <div className="accordion_item shadow-xl overflow-hidden" key={id}>
                            <div
                                className={`accordion_title ${isClicked === id ? 'active' : ''}`}
                                onClick={() => handleIsClicked(id)}
                            >
                                <h2>{title}</h2>
                                <div className="toggle_icon">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="accordion_content">
                                <p>{content}</p>
                            </div>
                        </div>

                        // <div key={id}>
                        //     {/* question section */}
                        //     <div
                        //         onClick={() => setShow(!show)}
                        //         className="flex justify-between items-center cursor-pointer"
                        //     >
                        //         <h1 className="text-xl font-semibold text-green">{title}</h1>
                        //         <BiChevronDown
                        //             className={`text-3xl transition-all duration-500 ${show ? "rotate-180" : ""
                        //                 }`}
                        //         ></BiChevronDown>
                        //     </div>

                        //     {/* answer section */}
                        //     <AnimatePresence>
                        //         {show && (
                        //             <motion.div
                        //                 initial={{ height: 0 }}
                        //                 animate={{ height: "auto" }}
                        //                 exit={{ height: 0 }}
                        //                 transition={{ duration: 0.3 }}
                        //                 className="overflow-clip"
                        //             >
                        //                 <p className="pt-3 text-sm md:text-base">{content}</p>
                        //             </motion.div>
                        //         )}
                        //     </AnimatePresence>
                        // </div>
                    );
                })
            }
        </div>
    );
};

export default Accordion;
