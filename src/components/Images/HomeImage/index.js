import React from 'react';
import Image from 'next/image';

import mySelf from '../../assets/profile2.png';

export default function HomeImage({ className, sizes }) {
    return (
        <div className="bg-gradient-to-br from-custom-violet via-custom-orange to-custom-red rounded-full">
            <Image
                src={mySelf}
                alt="my profile photo"
                height={500}
                width={500}
                sizes="(max-width: 1020px) 50vw, 500px"
                className={className}
                priority
            />
        </div>
    );
}