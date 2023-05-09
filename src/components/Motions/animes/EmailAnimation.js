import React from 'react';
import Lottie from 'lottie-react';

import animationData from '../json/email.json';


const EmailAnimation = ({ className }) => {
    return (
        <>
            <Lottie
                className={className}
                animationData={animationData}
            />
        </>
    );
};

export default EmailAnimation;

