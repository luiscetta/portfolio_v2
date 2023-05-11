import React from 'react';
import Image from 'next/image';

import mySelf from '../../assets/profile2.png';

const HomeImage = ({ className, height, width, quality }) => {
    return (
        <div className="w-full bg-gradient-to-br from-custom-violet via-custom-orange to-custom-red rounded-full">
            <Image
                src={mySelf}
                alt="my profile photo"
                height={height}
                width={width}
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={className}
                priority
                quality={quality}
            />
        </div>
    );
}

export default HomeImage;