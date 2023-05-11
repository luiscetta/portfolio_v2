
import Link from 'next/link';
import React from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs'


export const PrimaryButton = ({ text, href, className }) => {
    return (
        <Link
            href={href}
            className={className}
        >
            {text}
        </Link>
    );
};

export const SecondaryButton = ({ text, href, className }) => {
    return (
        <Link
            href={href}
            className={className}
        >
            {text}
        </Link>
    );
};

export const BackToTopBtn = ({ className }) => {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={handleBackToTop}
            id="back-to-top"
            className={className}
        >
            <BsArrowUpSquareFill className={className} />
        </button>
    );
};
