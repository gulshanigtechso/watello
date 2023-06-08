import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Button = ({ btnTxt, cls }) => {
    return (
        <button className={`btn ${cls}`}>
            <a href="/">{btnTxt}</a>
            <FiArrowUpRight />
        </button>
    );
};

export default Button;
