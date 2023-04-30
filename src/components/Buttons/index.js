import Link from 'next/link';
import React from 'react';

export function PrimaryButton({ text, href, className }) {
    return (
        <Link
            href={href}
            className={className}
        >
            {text}
        </Link>
    );
}

export function SecondaryButton({ text, href, className }) {
    return (
        <Link
            href={href}
            className={className}
        >
            {text}
        </Link>
    );
}
