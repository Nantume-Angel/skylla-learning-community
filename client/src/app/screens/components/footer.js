/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from "react";

export const Footer = () => {
    return ( 
        <footer css={{
            position: 'absolute',
            bottom: '0px',
            width: 'inherit',
            height: '60px',
            // lineHeight: '20px',
            padding: '10px',
            background: 'transparent',
        }}>
            <div>
                <p>© 2020 | Skylla Co</p>
            </div>     
        </footer>
     );
}