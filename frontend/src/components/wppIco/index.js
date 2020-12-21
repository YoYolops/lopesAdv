import React, { useState } from 'react';
import './wppIco.css'

import { SiWhatsapp } from "react-icons/si";

function WppIco () {

    const [hovered, setHovered] = useState(false)

    
    function on() {
        setHovered(true)
    }

    function off() {
        setHovered(false)
    }

    return (
        <a href="http://api.whatsapp.com/send?phone=5583998227653" target="_blank" rel="noreferrer" id='wp-container' onMouseOver={on} onMouseLeave={off}>
            <div className="whatsIco">
                <SiWhatsapp
                    size={40}
                    color={'white'}
                    className={'ico-svg'}
                />
                <span className={ hovered ? 'active-text' : 'wp-text'}>WhatsApp</span>
            </div>
        </a>
    );
};

export default WppIco