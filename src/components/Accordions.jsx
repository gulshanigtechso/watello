import React, { useState } from 'react';
import accData from '../data/accData';

const Accordions = () => {

    const [isClicked, setIsClicked] = useState(1);

    const handleIsClicked = (id) => {
        if (isClicked === id) {
            // if previously clicked accordion-item is already open, then close it.
            return setIsClicked(null);
        }

        // and open the currently clicked accordion-item having the id value we passed.
        setIsClicked(id);
    };


    return (
        <div className='my-10'>
            {
                accData.map(item => {
                    const { id, title, content } = item;
                    return (
                        <div className="accordion_item shadow-xl" key={id}>
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
                    );
                })
            }
        </div>
    );
};

export default Accordions;
