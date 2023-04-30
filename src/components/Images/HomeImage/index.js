import React from 'react';
import Image from 'next/image';

import mySelf from '../../assets/profile2.png';

export default function HomeImage({ className }) {
    return (
        <div className="bg-gradient-to-br from-custom-violet via-custom-orange to-custom-red rounded-full">
            <Image
                src={mySelf}
                alt="my profile photo"
                height={500}
                width={500}
                className={className}
            />
        </div>
    );
}