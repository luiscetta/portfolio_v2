import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Tooltips({ className, children, text, placement, style }) {
    return (
        <OverlayTrigger
            className={className}
            placement={placement}
            overlay={
                <Tooltip
                    style={style}
                >
                    {text}
                </Tooltip>
            }
        >
            {children}
        </OverlayTrigger>
    );
};
