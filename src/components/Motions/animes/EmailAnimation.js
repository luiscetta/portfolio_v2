import React from 'react';
import Lottie from 'lottie-react';

import animationData from '../json/email.json';


export default function EmailAnimation({ className }) {
    return (
        <>
            <Lottie
                className={className}
                animationData={animationData}
            />
        </>
    );
}